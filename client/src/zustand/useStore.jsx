import { create } from "zustand";


const useStore = create((set) => ({
  notes: null,
  setNotes: (notes) => set({ notes }),
}));

export default useStore;
