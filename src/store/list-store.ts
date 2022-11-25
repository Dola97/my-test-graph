import create from "zustand";
import { persist } from "zustand/middleware";

export type Item = {
  id: number;
  name: any;
  description: string;
};

type ItemsState = {
  idx: number;
  items: Item[];
  addItem: (name: string, description: string) => void;
  updateItem: (id: number, name: string, description: string) => void;
  deleteItem: (index: number) => void;
};

export const useListStore = create<ItemsState>()(
  persist(
    (set) => ({
      idx: 0,
      items: [],
      addItem: (name, description) => {
        set((state) => {
          const idx = state.idx + 1;
          return {
            idx,
            items: [...state.items, { id: idx, name, description }],
          };
        });
      },
      deleteItem: (id) => {
        set((state) => {
          const items = state.items.filter((row) => row.id !== id);
          return {
            items,
          };
        });
      },
      updateItem: (id, name, description) => {
        set((state) => {
          const items = state.items.map((item) => {
            if (item.id === id) {
              return { ...item, name: name, description: description };
            }
            return item;
          });
          return {
            items,
          };
        });
      },
    }),
    {
      name: "list-storage", // unique name
      getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
    }
  )
);
