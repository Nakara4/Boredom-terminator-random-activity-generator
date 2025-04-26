import { useState } from "react";
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup
} from "firebase/auth";
import { auth, googleProvider } from "../firebase";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <div className="flex gap-2">
        <button 
          onClick={signUp}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Sign Up
        </button>
        <button 
          onClick={signIn}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Sign In
        </button>
      </div>
      <button
        onClick={signInWithGoogle}
        className="w-full mt-4 bg-red-500 text-white px-4 py-2 rounded"
      >
        Sign In with Google
      </button>
    </div>
  );
}