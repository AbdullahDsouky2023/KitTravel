import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Hotel from '@/types/hotel';

interface BookingState {
  hotel: Hotel | null;
  checkInDate: Date | null;
  checkOutDate: Date | null;
  selectedRoom: {
    description: string;
    name: string;
  } | null;
  numberOfGuests: {
    adults: number;
    children: number;
    infants: number;
  };
  totalPrice: number;
  serviceFee: number;
  setHotel: (hotel: Hotel) => void;
  setDates: (checkIn: Date, checkOut: Date) => void;
  setRoom: (room: { description: string; name: string;}) => void;
  setGuests: (guests: {adults: number, children: number, infants: number} ) => void;
  calculateTotalPrice: () => void;
  calculateServiceFee: () => void;
  clearBooking: () => void;
  saveBooking: () => void;
  userBookings: any[];
  getBookingsFromStorage: () => Promise<void>;
}

export const useBookingStore = create<BookingState>()(
  persist(
    (set, get) => ({
      hotel: null,
      checkInDate: null,
      checkOutDate: null,
      selectedRoom: null,
      numberOfGuests: {
        adults: 1,
        children: 0,
        infants: 0
      },
      totalPrice: 0,
      serviceFee: 0,
      userBookings: [],
      setHotel: (hotel) => set({ hotel }),
      saveBooking: () => {
        const currentState = get();
        const newBooking = {
          hotel: currentState.hotel,
          checkInDate: currentState.checkInDate,
          checkOutDate: currentState.checkOutDate,
          selectedRoom: currentState.selectedRoom,
          numberOfGuests: currentState.numberOfGuests,
          totalPrice: currentState.totalPrice,
          serviceFee: currentState.serviceFee,
        };
        const generateBookingNumber = () => {
          return Math.floor(Math.random() * 1000000000000000).toString().padStart(15, '0');
        };

        const bookingWithNumber = {
          ...newBooking,
          bookingNumber: generateBookingNumber()
        };

        set((state) => ({
          ...state,
          userBookings: [...(state.userBookings || []), bookingWithNumber],
        }));
      },

      setDates: (checkIn, checkOut) => {
        set({ checkInDate: checkIn, checkOutDate: checkOut });
        get().calculateTotalPrice();
      },

      setRoom: (room) => {
        set({ selectedRoom: room });
        get().calculateTotalPrice();
      },

      setGuests: (guests) => set({ 
        numberOfGuests: guests
      }),

      calculateTotalPrice: () => {
        const { checkInDate, checkOutDate, selectedRoom, hotel } = get();
        if (checkInDate && checkOutDate && selectedRoom && hotel) {
          const nights = Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24));
          const price = nights * hotel.pricePerNight;
          set({ totalPrice: price });
        }
      },

      calculateServiceFee: () => {
        const { checkInDate, checkOutDate, selectedRoom ,hotel} = get();
        if (checkInDate && checkOutDate && selectedRoom && hotel) {
          const nights = Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24));
          const price = nights * hotel.pricePerNight;
          set({ totalPrice: price });
        }
      },
      clearBooking: () => set({
        hotel: null,
        checkInDate: null,
        checkOutDate: null,
        selectedRoom: null,
        numberOfGuests: {
          adults: 1,
          children: 1,
          infants: 1
        },
        totalPrice: 0
      }),
      getBookingsFromStorage: async () => {
        const bookings = await AsyncStorage.getItem('userBookings');
        if (bookings) {
          set({ userBookings: JSON.parse(bookings) });
        }
      },
    }),
    {
      name: 'booking-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
