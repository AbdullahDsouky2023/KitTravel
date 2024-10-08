interface Hotel {
    _id: string;
    name: string;
    location: {
        type: string;
        coordinates: number[];
    };
    description: string;
    rating: number;
    images: string[];
    features: string[];
    about: string;
    pricePerNight: number;
    rates: {
        name: string;
        date: string;
        avatar: string;
        rating: number;
        review: string;
    }[];
    rooms: Room[]
    guide: guide
}
export default Hotel;


interface Room {
    name: string;
    description: string;

}
interface guide {
    "name": string;
    "avatar": string;
    "description": string;
    "rating": number;
    "reviewCount": number;

}
enum GuestType {
    ADULTS = 'adults',
    CHILDREN = 'children',
    INFANTS = 'infants'
}
interface bookingCard {
    hotel: Hotel
    checkInDate: string
    checkOutDate: string
    selectedRoom: Room
    numberOfGuests: {
        adults: number
        children: number
        infants: number
    }
    bookingNumber: string
    
}
export { Room, guide, GuestType, bookingCard };