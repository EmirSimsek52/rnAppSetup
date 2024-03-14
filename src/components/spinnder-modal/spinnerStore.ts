import { create } from "zustand";

type SpinnderModalPorps = {
    show: boolean,
    showSpinner : () => void,
    hideSpinner: () => void,
}

export const useSpinnerStore = create<SpinnderModalPorps> ((set) =>({
    show:false,
    showSpinner: () =>set({show: true}),
    hideSpinner: () =>set({show: false})
}))