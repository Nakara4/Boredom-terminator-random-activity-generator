import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
import Auth from "./components/Auth";
import Button from "./components/Button";
import ActivityCard from "./components/ActivityCard";
import Loading from "./components/Loading";
import { ThemeContext } from './context/ThemeContext'
import { useContext } from 'react';

export default function App() {
 
  const [user, setUser] = useState(null);

  const { isDark, toggleTheme } = useContext(ThemeContext);

  
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [savedActivities, setSavedActivities] = useState(() => {
    const localData = localStorage.getItem("savedActivities");
    return localData ? JSON.parse(localData) : [];
  });

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  
  const fetchActivity = async () => {
    setLoading(true);
    setError(null);
    try {
      
      const response = await fetch('/db.json');
      const data = await response.json();
      
      
      const randomIndex = Math.floor(Math.random() * data.activities.length);
      const selectedActivity = data.activities[randomIndex];
      
      
      const formattedData = {
        activity: selectedActivity.activity,
        type: selectedActivity.type.toLowerCase()
      };
  
      setActivity(formattedData);
      updateHistory(formattedData);
  
    } catch (err) {
      
      const fallbackData = getFallbackActivity();
      setActivity(fallbackData);
      updateHistory(fallbackData);
      setError("Local database error - using fallback suggestions");
    } finally {
      setLoading(false);
    }
  };
  
  
  const updateHistory = (newActivity) => {
    setSavedActivities((prev) => {
      const updatedActivities = [...prev, newActivity].slice(-10);
      localStorage.setItem("savedActivities", JSON.stringify(updatedActivities));
      return updatedActivities;
    });
  };

  
  const getFallbackActivity = () => {
    
    const fallbacks = [
      { activity: "Learn a new card trick", type: "education" },
      { activity: "Call a family member", type: "social" },
      { activity: "Reorganize your workspace", type: "diy" },
      { activity: "Try 10-minute yoga", type: "recreational" },
      { activity: "Cook cultural meal", type: "cooking" },
      { activity: "Write a short story", type: "creative" },
      { activity: "Plant herbs/flowers", type: "gardening" }
    ];
    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
  };

  if (!user) {
    return <Auth />;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-2 sm:p-4">
      <header className="p-4 bg-teal dark:bg-teal-800 shadow-lg">
        {/* Existing header content */}
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-off-white dark:text-teal-100">
            🎉 Welcome, {user.email}!
          </h1>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30"
          >
            {isDark ? '🌙' : '☀️'}
          </button>
        </div>
        <button
          onClick={() => signOut(auth)}
          className="bg-coral dark:bg-coral-600 hover:bg-sunshine text-off-white px-4 py-2 rounded transition-colors duration-200"
        >
          Sign Out
        </button>
      </header>

      {/* New wrapper div */}
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center w-full">
            Boredom Terminator
          </h1>

          {/* Activity generation section */}
          <div className="w-full flex flex-col items-center">
            <div className="flex gap-4 mb-4">
              <Button onClick={fetchActivity} disabled={loading}>
                {loading ? "Loading..." : "Generate New"}
              </Button>
              {activity && (
                <button
                  onClick={fetchActivity}
                  className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full"
                >
                  🔄 Refresh
                </button>
              )}
            </div>

            {loading && <Loading />}
            {error && (
              <p className="mt-4 text-yellow-600">
                <span className="font-bold">Note:</span> {error}
              </p>
            )}
            {activity && !loading && (
              <ActivityCard activity={activity.activity} type={activity.type} />
            )}
            {!activity && !loading && !error && (
              <p className="mt-4 text-gray-600">Tap the button to get started!</p>
            )}

            {/* Recent activities list */}
            <div className="mt-8 w-full">
              <h2 className="text-xl font-bold mb-2 dark:text-teal-200 text-center">
                Recent Activities
              </h2>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-inner max-h-60 overflow-y-auto">
                {savedActivities.length > 0 ? (
                  savedActivities.map((item, index) => (
                    <div key={index} className="py-2 border-b">
                      <p className="font-medium">{item.activity}</p>
                      <p className="text-sm text-gray-500">{item.type}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">No history yet</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}