'use client'
import { useState } from "react";
import { useDebounce } from "@/hooks/useDebaunce";
import SearchInput from "./SearchInput";

type SearchModalProps<T> = {
  list: T[];
  filterFn: (item: T, search: string) => boolean;
  renderItem: (item: T, onSelect: (item: T) => void) => React.ReactNode;
  onSelect: (item: T) => void;
  toggleModal: () => void;
  className?: string;
  listClassName: string,
  listItemClassName: string
};

export default function SearchModal<T>({
  list,
  filterFn,
  renderItem,
  onSelect,
  toggleModal,
  className = "",
  listClassName,
  listItemClassName
}: SearchModalProps<T>): React.JSX.Element {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 300);

  const filteredList = list.filter(item => filterFn(item, debouncedValue));

  return (
    <div className={className}>
      <SearchInput value={value} setValue={setValue} toggleModal={toggleModal} />
      <ul className={listClassName}>
        {filteredList.length === 0 && (
          <li className={listItemClassName}>No matches found</li>
        )}
        {filteredList.map(item => renderItem(item, onSelect))}
      </ul>
    </div>
  );
}
