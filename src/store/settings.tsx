// src/store/settings.ts
import { create } from "zustand";

type Theme = "light" | "dark";

interface SettingsState {
  theme: Theme;
  fontSize: number;
  scale: number;
  setTheme: (theme: Theme) => void;
  setFontSize: (size: number) => void;
  setScale: (scale: number) => void;
}

const settingStore = create<SettingsState>((set) => ({
  theme: "light",
  fontSize: 16,
  scale: 1,
  setTheme: (theme) => set({ theme }),
  setFontSize: (size) => set({ fontSize: size }),
  setScale: (scale) => set({ scale }),
}));

export default settingStore;
