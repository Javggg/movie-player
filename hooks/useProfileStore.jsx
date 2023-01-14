import create from 'zustand'

const useProfileStore = create((set) => ({
    profile: {},
    setData: (newData) =>
        set((state) => ({ profile: { ...state.profile, ...newData } }))
}))

export default useProfileStore
