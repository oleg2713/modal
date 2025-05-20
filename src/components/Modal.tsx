'use client'
import { useEffect, useState } from "react";
import { colors } from '../utils/colors';
import { useDebounce } from "@/hooks/useDebaunce";
import ColorList from "./ColorsList";
import SearchInput from "./SearchInput";

type ModalProps = {
  setBackColor: (value: string) => void;
  toggleModal: () => void
};

export default function Modal({setBackColor, toggleModal}: ModalProps): React.JSX.Element {
  console.log(2)
  const [value, setValue] = useState("");
  const debauncedValue = useDebounce(value, 300);

  const colorsList = colors.filter(color => color.toLowerCase().includes(debauncedValue.toLowerCase()));

  return (
    <div className="w-128 rounded-2xl bg-gray-800 absolute top-1/8  left-1/2 -translate-x-1/2 -translate-y-1/4">
        <SearchInput toggleModal={toggleModal} value={value} setValue={setValue}/>
        <ColorList colors={colorsList} onSelect={setBackColor} />
    </div>
  );
}
