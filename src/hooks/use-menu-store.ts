import { create } from "zustand";

export type MenuType = "start" | "search" | "quick-settings";

type MenuStore = {
  type: MenuType | null;
  isOpen: boolean;
  onOpen: (type: MenuType) => void;
  onClose: () => void;
};

export const useMenu = create<MenuStore>((set) => ({
  type: null,
  isOpen: false,
  onOpen: (type: MenuType) => set({ type, isOpen: true }),
  onClose: () => set({ type: null, isOpen: false }),
}));
