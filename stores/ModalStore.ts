import { DocumentData } from 'firebase/firestore';
import create from 'zustand'
import { Movie } from '../typings';

interface ModalStore {
modalState: boolean;
movieState:Movie|DocumentData|null;
setMovieState: (movie:Movie) => void;
closeModal: () => void;
openModal: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  modalState: false,
  movieState:null,
 setMovieState: (movieState:Movie) => set(() => ({ movieState })),

 closeModal: () => set(() => ({ modalState: false })),
 openModal: () => set(() => ({ modalState: true })),
}))