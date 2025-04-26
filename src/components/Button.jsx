export default function Button({ onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full text-xl transition-colors shadow-lg"
    >
      Generate Activity!
    </button>
  );
}
