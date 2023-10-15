import { StyleSheet, Text, View,ScrollView,Image, ImageBackground} from 'react-native'

import RestaurentsData from '../dummydata/restaurents'
const FavouritesWidget = () => {
  return (
    <View style={{marginTop:10,padding:0}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
                RestaurentsData.map((item,index)=>{
                    return (
                      <ImageBackground
                        source={{ uri: item.image }}
                        key={index}
                        style={{ height: 160, width: 150 ,justifyContent:'center',alignItems:'center',alignSelf:'center',margin:2}}
                      >
                        <Text>{item.discount}</Text>
                        <View style={{position:'absolute',backgroundColor:'white',bottom:-7,justifyContent:'center',alignContent:'center'}}>
                          <Text style={{fontSize:17}}>{item.name}</Text>

                          <Text>{item.distance}</Text>
                        </View>
                      </ImageBackground>
                    );
                })
            }


        </ScrollView>

    </View>
  )
}
export default FavouritesWidget
const styles = StyleSheet.create({})