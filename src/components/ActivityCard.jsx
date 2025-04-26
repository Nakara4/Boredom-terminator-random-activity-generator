import CopyButton from "./CopyButton";

export default function ActivityCard({ activity, type }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-sm mx-auto mt-8">
      <div className="flex justify-between items-start">
        <h2 className="text-2xl font-bold text-gray-800">{activity}</h2>
        <CopyButton text={activity} />
      </div>
      <p className="text-gray-500 mt-2">Type: {type}</p>
    </div>
  );
}
