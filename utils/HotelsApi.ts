import api from ".";
import Hotel from "../types/hotel";

const getAllHotels = async (): Promise<Hotel[]> => {
    const response = await api.get("/hotels");
    // console.log('response.data', response.data)
    return response.data;
}
const getHotelById = async (id: string): Promise<Hotel> => {
    const response = await api.get(`/hotels/${id}`);
    console.log('getHotelById response.data', response.data)
    return response.data;
}
export {
    getAllHotels,
    getHotelById
}