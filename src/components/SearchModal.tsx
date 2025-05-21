'use client'

import ListItem from './ListItem'
import Input from '@/UI/Input';

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { ThemeColor } from "../utils/themeColors";

import { useDebounce } from "@/hooks/useDebaunce";
import { useThemeChange } from "@/hooks/useThemeChange";
import { useClickOutSide } from '@/hooks/useClickOutSide';


type SearchModalProps = {
  list: ThemeColor[];
  placeHolder: string;
};

export default function SearchModal({ list, placeHolder }: SearchModalProps): React.JSX.Element {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("white");
  const modalRef = useRef<HTMLDivElement>(null);

  const debouncedValue = useDebounce(value, 300);

  const filteredList = list.filter(item =>
    item.name.toLowerCase().includes(debouncedValue.toLowerCase())
  );

  useThemeChange(selectedValue);
  useClickOutSide(modalRef, () => setIsOpen(false))


  return (
    <div className="z-24 relative" ref={modalRef}>
      <p
        onClick={() => setIsOpen(prev => !prev)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Змінити колір
      </p>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 10 }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            <label className="block text-sm font-medium text-gray-700 mb-1">Введіть значення</label>
            <Input
              className="w-full px-3 py-2 text-black bg-gray-100 border border-gray-300 rounded focus:ring-blue-500"
              value={value}
              placeHolder={placeHolder}
              onChange={(val) => setValue(val)}
            />
            <motion.ul
              className="mt-2 z-10 w-full shadow-lg max-h-60 overflow-auto bg-white border border-gray-200 rounded"
            >
              {filteredList.map(item => (
                <ListItem
                  key={item.name}
                  item={item.name}
                  setSelectedValue={setSelectedValue}
                  setIsOpen={setIsOpen}
                />
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
