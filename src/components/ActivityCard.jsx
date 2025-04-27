import CopyButton from "./CopyButton";

const typeEmojis = {
  social: '👥',
  diy: '🛠️',
  recreational: '🏃♂️',
  education: '📚',
  cooking: '🍳',
  creative: '🎨',
  gardening: '🌱'
};

export default function ActivityCard({ activity, type }) {
  const typeColors = {
    social: 'border-teal',
    diy: 'border-coral',
    recreational: 'border-sunshine',
    education: 'border-purple-400',
    cooking: 'border-orange-400',
    creative: 'border-pink-400',
    gardening: 'border-green-400'
  };

  return (
    <div className={`bg-off-white dark:bg-gray-800 p-6 rounded-lg shadow-md 
      max-w-sm mx-auto mt-8 border-l-4 ${typeColors[type]} relative 
      transition-all hover:scale-105`}>
      <div className="flex justify-between items-start">
        <h2 className="text-2xl font-bold text-deep-gray dark:text-gray-100 pr-4">
          {activity}
        </h2>
        <CopyButton text={activity} />
      </div>
      <div className="flex items-center mt-2">
        <span className="text-xl mr-2">{typeEmojis[type]}</span>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wide">
          {type}
        </p>
      </div>
    </div>
  );
}