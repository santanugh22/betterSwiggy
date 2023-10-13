import { StyleSheet, Text, View ,Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Swiggy from '../components/Swiggy'
import Food from '../components/Search'
import Cart from '../components/Cart'
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";



import { Ionicons } from "@expo/vector-icons";
import Profile from '../components/Profile'

const Tab=createBottomTabNavigator()
const TabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 100,
          alignItems: "center",
          justifyContent: "center",
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
              <AntDesign name="search1" size={35} color="black" />
            ) : (
              <AntDesign name="search1" size={35} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="cart" size={40} color="black" />
            ) : (
              <Ionicons name="cart-outline" size={40} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome name="user" size={35} color="black" />
            ) : (
              <FontAwesome name="user-o" size={35} color="black" />

            ),
        }}
      />
    </Tab.Navigator>
  );
}
export default TabScreen
const styles = StyleSheet.create({})