import { TouchableOpacity, View } from "react-native"
import AppText from "@/components/AppText"
import { SafeAreaView } from "react-native-safe-area-context"
import tw from "twrnc"
import { useUserStore } from "@/store/UserStore/UserStore"
import { RFValue } from "react-native-responsive-fontsize"
import Header from "./Header"
import { Ionicons } from "@expo/vector-icons"
import Line from "../explore/hotelDetails/Line"
import { ScrollView } from "react-native-virtualized-view"
import ButtonComponent from "../explore/ButtonComponent"
import Button from "@/components/onboarding/Button"
import { Colors } from "@/constants/Colors"
import { logout } from "@/utils/auth"
const ProfileScreenComponent = () => {
    const profileItems = [
        {
            title: "Fill profile",
            description: "one Tab to fill passenger details"
        },
        {
            title: "Payment",
            description: "one Tab to fill payment details"
        },
        {
            title: "Bookings",
            description: "one Tab to view bookings"
        },
        {
            title: "Reviews",
            description: "one Tab to view reviews"
        },
        {
            title: "Refund",
            description: "one Tab to refund"
        }
    ]
    const settingsItems = [
        {
            title: "Language",
            description: "English"
        },
        {
            title: "Notifications",
            description: "one Tab to view notifications"
        },
        {
            title: "Privacy Policy",
            description: "one Tab to view privacy policy"
        },
        {
            title: "Terms and Conditions",
            description: "one Tab to view terms and conditions"
        }
    ]
    return (
        <SafeAreaView style={tw`flex-1 bg-white px-4 pb-[${RFValue(30)}px]`} >
            <Header />
            <ScrollView style={tw`flex-1`} showsVerticalScrollIndicator={false}>

            <View style={tw`flex flex-col gap-1`}>
                {profileItems.map((item, index) => (
                    <ProfileItem key={index} title={item.title} description={item.description} />
                ))}
                <Line/>
            </View>
            <View style={tw`flex flex-col gap-1`}>
                {settingsItems.map((item, index) => (
                    <ProfileItem key={index} title={item.title} description={item.description} />
                ))}
                <Line/>
            </View>
            <View style={tw`flex flex-col gap-1 mb-8`}>
                <Button
                style={tw`py-2  bg-[${Colors.red}]`}
                styleText={tw`text-white`}
                title="Logout" onPress={() => {
                    logout()
                }} />
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default ProfileScreenComponent

const ProfileItem = ({ title, description }: { title: string, description: string }) => {
    return (
        <TouchableOpacity style={tw`flex justify-between  my-1 flex-row items-center`}>

        <View style={tw`flex justify-between  my-1`}>
            <AppText style={tw`text-[${RFValue(16)}px] py-1 font-bold`}>{title}</AppText>
            <AppText style={tw`text-[${RFValue(12)}px] font-bold text-gray-500`}>{description}</AppText>
            </View>
            <Ionicons name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>
    )
}

