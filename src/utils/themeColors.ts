// utils/themeColors.ts
export const themeColors = [
  { name: "white", background: "white", foreground: "black" },
  { name: "red", background: "#dc2626", foreground: "green" },
  { name: "blue", background: "#2563eb", foreground: "red" },
  { name: "green", background: "#16a34a", foreground: "blue" },
];

export type ThemeColor = (typeof themeColors)[number]; 
