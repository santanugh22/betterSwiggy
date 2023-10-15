import { StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import HeaderSwiggy from './HeaderSwiggy'
import WidgetsSection from './WidgetsSection'
import SecondWidgets from './SecondWidgets'
import FavouritesWidget from './FavouritesWidget'
import OfferWidget from './OfferWidget'
const Swiggy = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <HeaderSwiggy/>
      <WidgetsSection/>
      <SecondWidgets/>
      <FavouritesWidget/>
      <OfferWidget/>

    </SafeAreaView>
  )
}
export default Swiggy
const styles = StyleSheet.create({})