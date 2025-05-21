'use client'

import ListItem from './ListItem'
import Input from '@/UI/Input';

import { useState } from "react";
import { useDebounce } from "@/hooks/useDebaunce";
import { useThemeChange } from "@/hooks/useThemeChange";
import { motion, AnimatePresence } from "framer-motion";

import { ThemeColor } from "../utils/themeColors";

type SearchModalProps = {
  list: ThemeColor[];
  placeHolder: string;
};


export default function SearchModal({list, placeHolder}: SearchModalProps): React.JSX.Element {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState("white")

  console.log(selectedValue)

  const debouncedValue = useDebounce(value, 300);

  const filteredList = list.filter(item =>
    item.name.toLowerCase().includes(debouncedValue.toLowerCase())
  );


  useThemeChange(selectedValue)

  return (
    <div className="z-24 relative">
    <Input
      className="text-black"
      value={value}
      placeHolder={placeHolder}
      onChange={(val) => setValue(val)}
      onClick={() => setIsOpen(prev => !prev)}
    />

      {isOpen && (
        <AnimatePresence>
          <motion.ul 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="absolute z-10 w-full mt-2 bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
            {filteredList.map(item => (
              <ListItem
                key={item.name}
                item={item.name}
                setSelectedValue={setSelectedValue}
                setIsOpen={setIsOpen}
              />
            ))}
          </motion.ul>
        </AnimatePresence>
      )}

    </div>
  );
}
