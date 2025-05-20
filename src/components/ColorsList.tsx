import React from "react";

type ColorListProps = {
  colors: string[];
  onSelect: (color: string) => void;
};

export default function ColorList({ colors, onSelect }: ColorListProps): React.JSX.Element {
  return (
    <ul className="max-h-40 overflow-y-auto text-sm px-2 py-1">
      {colors.length === 0 && (
        <li className="text-white italic py-2 text-center">No matches found</li>
      )}
      {colors.map((color) => (
        <li
          key={color}
          className="hover:text-blue-600 transition-colors p-2 mb-1 rounded cursor-pointer border hover:border-gray-300"
          onClick={() => onSelect(color)}
        >
          {color}
        </li>
      ))}
    </ul>
  );
}
