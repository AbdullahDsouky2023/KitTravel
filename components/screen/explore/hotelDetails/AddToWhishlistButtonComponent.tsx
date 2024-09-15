import { Pressable } from "react-native"
import { useHotelsStore } from "@/store/hotels/HotelsStore"
import useWhishlist from "@/hooks/useWhishlist"
import Hotel from "@/types/hotel"
import tw from "twrnc"
import { RFValue } from "react-native-responsive-fontsize"
import { Colors } from "@/constants/Colors"
import { AntDesign } from "@expo/vector-icons"
import { toast } from "sonner-native"
type Props = {
    _id: string
}

const AddToWhishlistButtonComponent = (props: Props) => {
    const { setHotel, deleteHotel } = useHotelsStore();
    const isWhishlist = useWhishlist(props._id || "");
    const handleWhishlist = () => {
        if (isWhishlist) {
            deleteHotel(props._id);
            toast.success("Hotel removed from whishlist")
        } else {
            setHotel(props._id);
            toast.success("Hotel added to whishlist")
        }
    }
    return (
        <Pressable
            onPress={handleWhishlist}
            style={tw`h-9 w-9 absolute bg-white p-2 right-4 top-4 rounded-full flex items-center`}  >
            {
                isWhishlist ? <AntDesign name="heart" size={RFValue(15)} color={Colors.red} /> : 
                <AntDesign name="hearto" size={RFValue(15)} color="black" />
            }

        </Pressable>
    )
}


export default AddToWhishlistButtonComponent;