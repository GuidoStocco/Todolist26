import {Tabs} from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/colors";

export default function PainelLayout() {
    return(
        <Tabs>
            <Tabs.Screen name="home/page" options={{ headerShown: false,
                tabBarIcon:(({size, color, focused}) => {
                   return <Ionicons name="home-outline" size={30} color={COLORS.primary} focused/>
                }),
                tabBarLabel:'Home',
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor:COLORS.subTitle
                
             }} />
            <Tabs.Screen name="perfil/page" options={{ headerShown: false,
                tabBarIcon:(({size, color, focused}) => {
                    return <Ionicons name="cube-outline" size={30} color={COLORS.primary} focused/>
                 }),
                 tabBarLabel:'Config',
                 tabBarActiveTintColor: COLORS.primary,
                 tabBarInactiveTintColor:COLORS.subTitle
             }} />
        </Tabs>
    )
}