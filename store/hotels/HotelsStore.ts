import Hotel from '@/types/hotel'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand'
import { persist, createJSONStorage, PersistOptions } from 'zustand/middleware'

interface HotelsStore {
    hotels: Hotel[];
    setHotel: (hotel: Hotel) => void;
    deleteHotel: (hotel: Hotel) => void;
}

type HotelsStorePersist = HotelsStore & {
    _hasHydrated: boolean;
    setHasHydrated: (state: boolean) => void;
};

const persistOptions: PersistOptions<HotelsStorePersist> = {
    name: 'hotels',
    storage: createJSONStorage(() => AsyncStorage),
};

export const useHotelsStore = create<HotelsStorePersist>()(
    persist(
        (set) => ({
            hotels: [],
            setHotel: (hotel: Hotel) => {
                set((state: HotelsStore) => ({ hotels: [...state.hotels, hotel] }))
            },
            deleteHotel: (hotel: Hotel) => {
                set((state: HotelsStore) => ({ hotels: state.hotels.filter((h) => h._id !== hotel._id) }))
            },
            _hasHydrated: false,
            setHasHydrated: (state) => set({ _hasHydrated: state }),
        }),
        persistOptions
    )
)