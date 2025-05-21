type ListItem = {
    item: string;
    setSelectedValue: (item: string) => void;
    setIsOpen: (item: boolean) => void;
}

export default function ListItem({item, setSelectedValue, setIsOpen}: ListItem): React.JSX.Element {

    return (
        <li 
            className="px-4 py-2 text-black hover:bg-blue-100 cursor-pointer"   
            onClick={() => {
            setSelectedValue(item)
            setIsOpen(false)
            }}>
            {item}
        </li>
    )
}