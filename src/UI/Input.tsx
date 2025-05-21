import React from "react";

type InputType = {
    placeHolder: string,
    onChange: (item: string) => void;
    value: string;
    className: string;
    onClick: () => void
}

export default function Input({ placeHolder, onChange, value, className, onClick }: InputType) {
  return (
    <input
      className={className}
      value={value}
      placeholder={placeHolder}
      onChange={(e) => onChange(e.target.value)}
      onClick={onClick}
    />
  );
}