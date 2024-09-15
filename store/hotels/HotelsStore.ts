import Hotel from '@/types/hotel'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand'
import { persist, createJSONStorage, PersistOptions } from 'zustand/middleware'

interface HotelsStore {
    hotels: string[];
        setHotel: (hotel_id: string) => void;
    deleteHotel: (hotel_id: string) => void;
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
            setHotel: (hotel_id: string) => {
                set((state: HotelsStore) => ({ hotels: [...state.hotels, hotel_id] }))
            },
            deleteHotel: (hotel_id: string) => {
                set((state: HotelsStore) => ({ hotels: state.hotels.filter((h) => h !== hotel_id) }))
            },
            _hasHydrated: false,
            setHasHydrated: (state) => set({ _hasHydrated: state }),
        }),
        persistOptions
    )
)