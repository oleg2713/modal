'use client'

import Modal from "@/components/Modal";
import { useState } from "react";

const dummyData = ["Pizza", "Burger", "Sushi", "Pasta", "Tacos", "Ramen", "Salad"];

export default function ExampleModalUsage(): React.JSX.Element {
  const [query, setQuery] = useState("");

  const filtered = dummyData.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Modal toggleModal={() => {}} styles="inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg w-80">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Пошук їжі..."
          className="w-full border px-3 py-2 rounded mb-3 text-black"
        />
        <ul className="max-h-40 overflow-y-auto">
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <li key={item} className="p-2 text-black hover:text-amber-300 cursor-pointer rounded">
                {item}
              </li>
            ))
          ) : (
            <li className="italic text-gray-500 text-center">Нічого не знайдено</li>
          )}
        </ul>
      </div>
    </Modal>
  );
}
