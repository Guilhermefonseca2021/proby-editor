import { create } from 'zustand';

interface ImageToEditState {
  file: File | undefined;
  showModal: boolean;
  setFile: (file: File) => void;
  toggleModal: () => void;
}

const imageToEdit = create<ImageToEditState>((set) => ({
  file: undefined,
  showModal: false,
  setFile: (file: File) => set({ file }),
  toggleModal: () => set((state) => ({ showModal: !state.showModal })),
}));

export default imageToEdit;
