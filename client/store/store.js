import { create } from 'zustand';
import zukeeper from 'zukeeper';

const useCardStore = create(zukeeper((set) => ({
    currentCard: null,
    nextCard: null,
    setCards: (current, next) => set({
        currentCard: current,
        nextCard: next
    }),

    atThreshold: false,
    setThreshold: (bool) => set({ 
        atThreshold: bool 
    })
})));

window.store = useCardStore;
export default useCardStore;