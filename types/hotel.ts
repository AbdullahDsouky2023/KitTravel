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
export { Room, guide };