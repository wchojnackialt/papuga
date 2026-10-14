import { useSyncExternalStore } from 'react'
import { clock } from '../engine/clock'

/** Przerysowanie po zmianie symulowanego zegara w panelu testowego. */
export const useClockVersion = () => useSyncExternalStore(clock.subscribe, clock.version)
