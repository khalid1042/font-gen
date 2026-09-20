"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark" || (theme === "system" && typeof window !== 'undefined' && window.matchMedia("(prefers-color-scheme: dark)").matches);

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button 
      onClick={toggleTheme} 
      className={styles.toggleButton} 
      aria-label="Toggle Dark Mode"
      title={mounted ? (isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro") : "Cargando tema..."}
    >
      <div className={styles.iconContainer}>
        {mounted ? (
          isDark ? (
            <Sun className={styles.icon} size={20} />
          ) : (
            <Moon className={styles.icon} size={20} />
          )
        ) : null}
      </div>
    </button>
  );
}
