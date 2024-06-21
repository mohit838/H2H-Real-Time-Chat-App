import { create } from "zustand";

const useConversation = create((set) => ({
  selectConversation: null,
  setSelectConversation: (selectConversation) =>
    set({
      selectConversation,
    }),
  message: [],
  setMessage: (message) => set({ message }),
}));

export default useConversation;
