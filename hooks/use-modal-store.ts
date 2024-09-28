import { create } from 'zustand';

export type ModalType = 'addDisplayModal';

interface ModalStore {
  type: ModalType | null;
  isOpen: boolean;
  stateId: string | null;
  variantId: string | null;
  onOpen: (type: ModalType, stateId: string, variantId: string) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  isOpen: false,
  stateId: null,
  variantId: null,
  onOpen: (type, stateId, variantId) => set({ type, isOpen: true, stateId, variantId }),
  onClose: () => set({ type: null, isOpen: false, stateId: null, variantId: null }),
}));
