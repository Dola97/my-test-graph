import create from "zustand";
import { persist } from "zustand/middleware";
export type device = {
  id: number;
  name: string;
  quantity: number;
};

type DevicesState = {
  idx: number;
  rows: device[];
  devices: device[];
  addDevice: () => void;
  updateType: (id: number, value: string) => void;
  updateQauntity: (id: number, value: number) => void;
  deleteRow: (index: number) => void;
};
const initialRow: device = {
  id: 0,
  name: "",
  quantity: 0,
};

export const useDevicesStore = create<DevicesState>()(
  persist(
    (set) => ({
      idx: 0,
      rows: [],
      devices: [],
      addDevice: () => {
        set((state: DevicesState) => {
          const idx = state.idx + 1;
          return {
            idx,
            rows: [...state.rows, { ...initialRow, id: idx }],
          };
        });
      },
      deleteRow: (id) => {
        set((state) => {
          const rows = state.rows.filter((row) => row.id !== id);

          return {
            rows,
          };
        });
      },
      updateType: (id, value) => {
        set((state) => {
          const rows = state.rows.map((row) => {
            if (row.id === id) {
              return { ...row, name: value };
            }
            return row;
          });

          return {
            rows,
          };
        });
      },
      updateQauntity: (id, value) => {
        set((state) => {
          const rows = state.rows.map((row) => {
            if (row.id === id) {
              return { ...row, quantity: value };
            }
            return row;
          });

          return {
            rows,
          };
        });
      },
    }),
    {
      name: "devices-storage-v1", // unique name
      getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
    }
  )
);
