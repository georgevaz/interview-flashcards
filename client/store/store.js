import { create } from 'zustand';
import zukeeper from 'zukeeper';

const useCardStore = create(zukeeper((set) => ({

    atThreshold: false,
    setThreshold: (bool) => set({ 
        atThreshold: bool 
    }),

    questionBatch: 'react',
    setQuestionBatch: (tech) => set({
        questionBatch: tech
    })
})));

window.store = useCardStore;
export default useCardStore;