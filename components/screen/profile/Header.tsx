import { View } from "react-native"
import AppText from "@/components/AppText"
import { RFValue } from "react-native-responsive-fontsize"
import tw from "twrnc"
import { useUserStore } from "@/store/UserStore/UserStore"

const Header = () => {
    const { user } = useUserStore()
    return (
        <View style={tw`flex py-4 `}>
            <AppText style={tw`text-[${RFValue(25)}px] font-bold`}>{
                user?.name
            }
            </AppText>
            <AppText style={tw`text-[${RFValue(13)}px] text-gray-500`}>{
                user?.email
            }
            </AppText>
        </View>
    )
}
export default Header