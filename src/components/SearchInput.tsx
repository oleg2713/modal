type SearchType = {
    value: string;
    setValue: (e: string) => void;
    toggleModal: () => void
};

export default function SearchInput({ value, setValue, toggleModal }: SearchType): React.JSX.Element {
  return (
    <div className="flex flex-col gap-2 p-3 border-b border-black-300">
      <div className="flex justify-end">
        <button onClick={toggleModal} className=" hover:scale-110 text-lg font-bold px-2 py-2 border-black">
          ×
        </button>
      </div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search colors..."
        className="w-full border border-black rounded px-3 py-2 text-sm focus:outline-none focus:ring-2"
      />
    </div>
  );
}
