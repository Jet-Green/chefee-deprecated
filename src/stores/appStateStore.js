import { defineStore } from 'pinia'

export const useAppStateStore = defineStore({
    id: 'appStateStore',
    state: () => ({
        ww: 1080,
        xs: false,
        sm: false, //	600px > < 960px
        md: true, //960px > < 1264px*
        lg: false, //1264px > < 1904px*
        xl: false
    }),
    getters: {
    },
    actions: {
        unsetAll() {
            this.xs = false
            this.sm = false
            this.md = false
            this.lg = false
            this.xl = false
        }
    }
})
