export default function Button({ onClick, disabled, children }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="bg-coral hover:bg-sunshine text-off-white font-bold py-4 px-8 rounded-full 
                 text-xl transition-all duration-300 hover:scale-105 hover:-rotate-2 
                 shadow-lg disabled:opacity-50 disabled:hover:scale-100 disabled:hover:rotate-0"
    >
      {children}
    </button>
  );
}