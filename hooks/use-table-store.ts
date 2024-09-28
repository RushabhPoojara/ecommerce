import {create} from 'zustand';
import { nanoid } from 'nanoid';

interface Design {
  id: string;
  content: string;
}

interface State {
  id: string;
  name: string;
  filters: string[];
}

interface TableState {
  states: State[];
  variants: string[];
  designs: { [key: string]: { [key: string]: Design } };
  addState: (name: string, filters: string[]) => void;
  deleteState: (id: string) => void;
  addVariant: (name: string) => void;
  deleteVariant: (name: string) => void;
  reorderStates: (startIndex: number, endIndex: number) => void;
  insertDesign: (stateId: string, variantId: string, design: Design) => void;
}

const useTableStore = create<TableState>((set) => ({
  states: [
    { id: nanoid(), name: 'Default State', filters: [] }
  ],
  variants: ['Variant A', 'Variant B'],
  designs: {},

  addState: (name, filters) => set((state) => {
    const newState = { id: nanoid(), name, filters };
    return { states: [...state.states, newState] };
  }),

  deleteState: (id) => set((state) => ({
    states: state.states.filter((s) => s.id !== id),
    designs: Object.fromEntries(
      Object.entries(state.designs).filter(([key]) => key !== id)
    ),
  })),

  addVariant: (name) => set((state) => ({
    variants: [...state.variants, name],
  })),

  deleteVariant: (name) => set((state) => ({
    variants: state.variants.filter((v) => v !== name),
    designs: Object.fromEntries(
      Object.entries(state.designs).map(([stateId, variants]) => [
        stateId,
        Object.fromEntries(
          Object.entries(variants).filter(([variantId]) => variantId !== name)
        ),
      ])
    ),
  })),

  reorderStates: (startIndex, endIndex) => set((state) => {
    const newStates = Array.from(state.states);
    const [reorderedItem] = newStates.splice(startIndex, 1);
    newStates.splice(endIndex, 0, reorderedItem);
    return { states: newStates };
  }),

  insertDesign: (stateId, variantId, design) => set((state) => ({
    designs: {
      ...state.designs,
      [stateId]: {
        ...state.designs[stateId],
        [variantId]: design,
      },
    },
  })),
}));

export default useTableStore;