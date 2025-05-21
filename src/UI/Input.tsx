import React from "react";

type InputType = {
    placeHolder: string,
    onChange: (item: string) => void;
    value: string;
    className: string;
}

export default function Input({ placeHolder, onChange, value, className }: InputType) {
  return (
    <input
      className={className}
      value={value}
      placeholder={placeHolder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}