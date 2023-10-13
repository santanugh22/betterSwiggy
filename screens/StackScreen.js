import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { useState } from 'react'
import TabScreen from './TabScreen'
import Login from '../components/Login'
import Register from '../components/Register'





const Stack=createStackNavigator()
const StackScreen = () => {
    const [isLoggedIn,setIsLoggedIn]=useState(true)
  return (
    <>
    {
        isLoggedIn?    <Stack.Navigator screenOptions={{headerShown:false
        }}>
                <Stack.Screen name="tab" component={TabScreen} />

        </Stack.Navigator> :<Stack.Navigator screenOptions={{headerShown:false}}>
                   <Stack.Screen name="Login" component={Login} />
                   <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    }
    
    </>
   
    

  );
}
export default StackScreen
const styles = StyleSheet.create({})





   
