import { create } from "zustand";

const useStore = create((set) => ({
    words: ["test1", "test2", "test3"],
    newWord: "",
    addWord() {
        set((state) => ({ 
            words: [...state.words, state.newWord],
            newWord: "",
        }))
    },
    setNewWord(wordInput) {
        set((state) => ({
            newWord: wordInput,
        }))
    }
}))


export default useStore