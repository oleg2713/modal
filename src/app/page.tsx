'use client'

import { useState } from "react";
import Modal from "@/components/Modal";
import { colors } from "@/utils/colors";
import SearchInput from "@/components/SearchInput";
import ColorList from "@/components/List";
import { useDebounce } from "@/hooks/useDebaunce";

const CONTAINER_SIZE = "h-full w-full bg-black text-white flex items-center justify-center";

export default function Home(): React.JSX.Element {
  const [backgroundColor, setBackgroundColor] = useState("white")
  const [modal, showModal] = useState(false)
  const [value, setValue] = useState("");

  const debouncedValue = useDebounce(value, 300);

  const filteredColors = colors.filter(color =>
    color.toLowerCase().includes(debouncedValue.toLowerCase())
  );

  function setBackColor(value: string): void {
    setBackgroundColor(value)
  }

  function toggleModal(): void {
    showModal(prev => !prev)
  }

  return (
    <div style={{backgroundColor}} className="h-[100vh]">
      <button className="border-black border-2 px-4 py-2 text-2xl to-black mt-16 text-black rounded" onClick={toggleModal}>
        {modal ? "Закрити вікно" : "відкрити вікно"}
      </button>
      {modal && (
        <Modal toggleModal={toggleModal} styles="w-128 rounded-2xl absolute top-1/8 left-1/2 -translate-x-1/2 -translate-y-1/4 bg-gray-800 text-white">
          <SearchInput value={value} setValue={setValue} toggleModal={toggleModal} />
          <ColorList value={filteredColors} onSelect={setBackColor} />
        </Modal>
      )}
      <div className="h-128 flex justify-evenly gap-4 mt-32 items-center">
        <div className={CONTAINER_SIZE}><p>first</p></div>
        <div className={CONTAINER_SIZE}><p>second</p></div>
        <div className={CONTAINER_SIZE}><p>third</p></div>
      </div>
    </div>
  );
}
