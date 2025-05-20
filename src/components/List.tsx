import React from "react";

type ColorListProps = {
  value: string[];
  onSelect: (color: string) => void;
};

export default function List({ value, onSelect }: ColorListProps): React.JSX.Element {
  return (
    <ul className="max-h-40 overflow-y-auto text-sm px-2 py-1">
      {value.length === 0 && (
        <li className="text-white italic py-2 text-center">No matches found</li>
      )}
      {value.map((item: string) => (
        <li
          key={item}
          className="p-2 mb-1 rounded cursor-pointer border-2 border-black hover:border-white"
          onClick={() => onSelect(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
