import { ScrollView, StyleSheet, Text, View } from 'react-native'
import OffersData from '../dummydata/offers'
const OfferWidget = () => {
  return (
    <View style={{flex:1,marginTop:10,justifyContent:'center',alignItems:'center'}}>

         
       

         <ScrollView horizontal style={{marginTop:10}}>
            {
                OffersData.map((item,index)=>{
                    return (
                      <View key={index} style={{backgroundColor:'rgba(200,12,2,0.1)',height:150,width:130,margin:2}}>
                        <View
                          style={{
                            height: 50,
                            width: 50,
                            borderRadius: 25,
                            backgroundColor: "green",
                            alignSelf:'center',
                            justifyContent:'center',
                            alignItems:'center',
                            marginTop:7
                          }}
                        ><Text style={{fontSize:20,color:'white'}}>%</Text>
                        </View>

                        <Text style={{alignSelf:'center',fontSize:22,color:'green'}}>{item.name}</Text>
                        <Text style={{fontSize:20,color:'green',fontWeight:'bold',alignSelf:'center'}}>Get {item.discount} today</Text>
                      </View>
                    );
                })
            }

         </ScrollView>





    </View>
  )
}
export default OfferWidget
const styles = StyleSheet.create({})