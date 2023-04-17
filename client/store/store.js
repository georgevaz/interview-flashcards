import { create } from 'zustand';
import zukeeper from 'zukeeper';

const useCardStore = create(zukeeper((set) => ({

    atThreshold: false,
    setThreshold: (bool) => set({ 
        atThreshold: bool 
    }),

    questionBatch: 'ReactQuestions',
    changeBatch: false,
    setQuestionBatch: (tech) => set({
        questionBatch: tech
    }),
    setChangeBatch: (bool) => set({
        changeBatch: bool
    })
})));

window.store = useCardStore;
export default useCardStore;