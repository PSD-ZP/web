import {create} from "zustand";

export const useStore = create((set) => ({
    forecast: null,
    clothes: null,
    setForecast: (newForecast) => set(() => ({ forecast: newForecast })),
    setClothes: (newClothes) => set(() => ({ clothes: newClothes })),
}));
