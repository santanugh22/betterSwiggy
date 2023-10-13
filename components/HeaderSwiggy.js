import { StyleSheet, Text, View } from 'react-native'
import * as Location from 'expo-location'
import { useState,useEffect } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from "@expo/vector-icons";
const HeaderSwiggy = () => {
  const [location, setLocation] = useState();
  const [error, setErrorMsg] = useState();
  const [adress,setAdress]=useState()


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      const longitude=location.coords.latitude
      const latitude=location.coords.longitude

      const address = await Location.reverseGeocodeAsync({longitude,latitude});
      setAdress(address)

      

    })();
  }, []);





 


  //  {"coords": {"accuracy": 5, "altitude": 0, "altitudeAccuracy": -1, "heading": -1, "latitude": 37.785834, "longitude": -122.406417, "speed": -1}, "timestamp": 1697179723700.9832}

  // const {coords}=location


  return (
    <View style={{ height: 70, width: "100%", flexDirection: "row",justifyContent:'space-between',alignItems:'center' }}>
      <View style={styles.locationView}>
        <Entypo name="location-pin" size={24} color="black" />
        <Text>Locations</Text>
      </View>
      <View style={{ flexDirection: "row", marginHorizontal: 12 }}>
        <MaterialIcons name="local-offer" size={24} color="black" />
        <Text>Offers</Text>
      </View>
    </View>
  );
}
export default HeaderSwiggy
const styles = StyleSheet.create({
  locationView:{
    flexDirection:'row',
    justifyContent:'center',




  }
})