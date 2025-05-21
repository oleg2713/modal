import { useEffect } from "react";
import { themeColors } from "@/utils/themeColors";

export function useThemeChange(color: string): null {
  useEffect(() => {
    const root = document.documentElement;

    const theme = themeColors.find(t => t.name === color) || themeColors[0];

    root.style.setProperty("--background", theme.background);
    root.style.setProperty("--foreground", theme.foreground);
  }, [color]);

  return null;
}
