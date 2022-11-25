import create from "zustand";
import { devtools } from "zustand/middleware";
export type modaltypes = {
  state: boolean;
  name: string;
};
interface ModalState {
  stateModals: modaltypes[];

  setModal: (val: boolean, name: string) => void;
}
export const useModal = create<ModalState>()(
  devtools((set) => ({
    stateModals: [{ name: "addItem", state: false }],
    setModal: (val, name) => {
      set((state) => {
        const stateModals = state.stateModals.map((modal) => {
          if (modal.name === name) {
            return { ...modal, state: val };
          }
          return modal;
        });
        return { stateModals };
      });
    },
  }))
);
