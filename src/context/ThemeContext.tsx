"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  mounted: boolean;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const themeListeners = new Set<() => void>();

function emitThemeChange() {
  themeListeners.forEach((listener) => listener());
}

function subscribeTheme(callback: () => void) {
  themeListeners.add(callback);
  window.addEventListener("storage", callback);

  let media: MediaQueryList | null = null;
  try {
    media = window.matchMedia("(prefers-color-scheme: dark)");
    media.addEventListener("change", callback);
  } catch {}

  return () => {
    themeListeners.delete(callback);
    window.removeEventListener("storage", callback);
    if (media) {
      try {
        media.removeEventListener("change", callback);
      } catch {}
    }
  };
}

function getThemeSnapshot(): Theme {
  try {
    const saved = localStorage.getItem("cynbit-theme") as Theme | null;
    if (saved === "light" || saved === "dark") {
      return saved;
    }
    if (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }
  } catch {}
  return "light";
}

function getThemeServerSnapshot(): Theme {
  return "light";
}

const emptySubscribe = () => () => {};

function applyThemeToDOM(next: Theme) {
  if (typeof document === "undefined") return;
  const isDark = next === "dark";
  document.documentElement.classList.toggle("dark", isDark);
  document.documentElement.setAttribute("data-theme", next);
  if (document.body) {
    document.body.classList.toggle("dark", isDark);
    document.body.setAttribute("data-theme", next);
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getThemeServerSnapshot
  );

  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  useEffect(() => {
    applyThemeToDOM(theme);
  }, [theme]);

  const setTheme = (next: Theme) => {
    try {
      localStorage.setItem("cynbit-theme", next);
    } catch {}
    applyThemeToDOM(next);
    emitThemeChange();
  };

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDark: mounted ? theme === "dark" : false,
        mounted,
        toggleTheme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
