import { create } from 'zustand';
import zukeeper from 'zukeeper';

const useCardStore = create(zukeeper((set) => ({

    // atThreshold: false,
    // setThreshold: (bool) => set({ 
    //     atThreshold: bool 
    // })
})));

window.store = useCardStore;
export default useCardStore;