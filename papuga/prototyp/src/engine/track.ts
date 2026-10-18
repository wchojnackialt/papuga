import { useStore } from './store'

/** Punkt rozbudowy: każda akcja z  przechodzi tędy. */
export const track = (name: string, props?: Record<string, unknown>) => useStore.getState().track(name, props)
