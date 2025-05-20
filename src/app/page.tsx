'use client'

import { useState } from "react";
import SearchModal from "@/components/SearchModal";
import { colors } from "../utils/colors";

const CONTAINER_SIZE = "flex-1 h-64 bg-black text-white flex items-center justify-center rounded-xl shadow-md";

export default function Home(): React.JSX.Element {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [modal, showModal] = useState(false);

  function toggleModal() {
    showModal(prev => !prev);
  }

  function handleSelectColor(color: string) {
    setBackgroundColor(color);
  }

  function filterColors(color: string, search: string): boolean {
    return color.toLowerCase().includes(search.toLowerCase());
  }

  function renderColorItem(color: string, onSelect: (color: string) => void): React.ReactNode {
    return (
      <li
        key={color}
        className="transition-colors p-2 mb-1 rounded cursor-pointer border hover:border-gray-900"
        onClick={() => onSelect(color)}
      >
        {color}
      </li>
    );
  }

return (
  <div style={{ backgroundColor }} className="min-h-screen relative flex flex-col items-center px-4 py-12">
    <button
      className="border-black border-2 px-6 py-3 text-xl text-black rounded mb-12"
      onClick={toggleModal}
    >
      {modal ? "Закрити вікно" : "Відкрити вікно"}
    </button>

    {modal && (
      <SearchModal
        list={colors}
        filterFn={filterColors}
        renderItem={renderColorItem}
        onSelect={handleSelectColor}
        toggleModal={toggleModal}
        className="w-[32rem] z-10 rounded-2xl bg-gray-800 shadow-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        listClassName="max-h-60 overflow-y-auto text-sm px-3 py-2"
        listItemClassName="text-white py-2 px-2 hover:bg-gray-700 rounded cursor-pointer transition"
      />
    )}

    <div className="flex justify-center gap-6 mt-24 w-full max-w-5xl">
      <div className={CONTAINER_SIZE}>
        <p>first</p>
      </div>
      <div className={CONTAINER_SIZE}>
        <p>second</p>
      </div>
      <div className={CONTAINER_SIZE}>
        <p>third</p>
      </div>
    </div>
  </div>
);
}
