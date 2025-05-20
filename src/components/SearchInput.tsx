type SearchType = {
  value: string;
  setValue: (e: string) => void;
  toggleModal: () => void;
};

export default function SearchInput({
  value,
  setValue,
  toggleModal,
}: SearchType): React.JSX.Element {
  return (
    <div className="flex flex-col gap-3 p-4 border-b border-gray-600">
      <div className="flex justify-end">
        <button
          onClick={toggleModal}
          className="text-white text-xl font-bold px-2 py-1 hover:scale-110"
          aria-label="Close modal"
        >
          ×
        </button>
      </div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search..."
        className="w-full bg-gray-100 text-black border border-gray-300 rounded px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
