import { StyleSheet, Text, View ,Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Swiggy from '../components/Swiggy'
import Food from '../components/Food'
import Instamart from '../components/Instamart'
import Dineout from '../components/Dineout'
import Meat from '../components/Meat'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Tab=createBottomTabNavigator()
const TabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 100,
          alignItems:'center',
          justifyContent:'center'
        },
      }}
    >
      <Tab.Screen
        name="Swiggy"
        component={Swiggy}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../assets/swiggy.webp")}
              style={{ height: 40, width: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Food"
        component={Food}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons name="bowl-mix" size={40} color="black" />
            ) : (
              <MaterialCommunityIcons
                name="bowl-mix-outline"
                size={40}
                color="black"
              />
            ),
        }}
      />
      <Tab.Screen
        name="Instamart"
        component={Instamart}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="md-wine" size={40} color="black" />
            ) : (
              <Ionicons name="md-wine-outline" size={38} color="black" />
            ),
        }}
      />
      <Tab.Screen name="Dineout" component={Dineout} />
      <Tab.Screen name="Meat" component={Meat} />
    </Tab.Navigator>
  );
}
export default TabScreen
const styles = StyleSheet.create({})