'use client'

import { useState } from "react";
import Modal from "@/components/Modal";
const CONTAINER_SIZE = "h-full w-full bg-black text-white flex items-center justify-center";


export default function Home(): React.JSX.Element {
  console.log(1)
  const [backgroundColor, setBackgroundColor] = useState("white")
  const [modal, showModal] = useState(false)

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
      {modal && <Modal toggleModal={toggleModal} setBackColor={(e) => setBackColor(e)} />}
      <div className="h-128 flex justify-evenly gap-4 mt-32 items-center" >
        <div className={CONTAINER_SIZE}><p>first</p></div>
        <div className={CONTAINER_SIZE}><p>second</p></div>
        <div className={CONTAINER_SIZE}><p>third</p></div>
      </div>
    </div>
  );
}
