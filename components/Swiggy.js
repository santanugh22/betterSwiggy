import { StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import HeaderSwiggy from './HeaderSwiggy'
import WidgetsSection from './WidgetsSection'
import SecondWidgets from './SecondWidgets'
const Swiggy = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <HeaderSwiggy/>
      <WidgetsSection/>
      <SecondWidgets/>

    </SafeAreaView>
  )
}
export default Swiggy
const styles = StyleSheet.create({})