import { View, Text } from 'react-native'
import React from 'react'
import { useHotelsStore } from '@/store/hotels/HotelsStore';

type Props = {
    _id: string;
}

const useWhishlist = (_id: string) => {
    const { hotels } = useHotelsStore();
    const isWhishlist = hotels.some((hotel) => hotel._id === _id);
    return isWhishlist;

}

export default useWhishlist