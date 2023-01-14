import create from 'zustand'

const useSettingsStore = create((set) => ({
    settings: {},
    setSetting: (newSetting) =>
        set((state) => ({ settings: { ...state.settings, ...newSetting } }))
}))

export default useSettingsStore