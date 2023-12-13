import {create} from "zustand";

export const useStore = create((set) => ({
    location: '',
    forecast: null,
    clothes: null,
    playgroundInfo: null,
    setLocation: (newLocation) => set(() => ({ location: newLocation })),
    setForecast: (newForecast) => set(() => ({ forecast: newForecast })),
    setClothes: (newClothes) => set(() => ({ clothes: newClothes })),
    setPlaygroundInfo: (newPlaygroundInfo) => set(() => ({playgroundInfo: newPlaygroundInfo})),
}));
