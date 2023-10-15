import { StyleSheet, Text, View,Image } from 'react-native'
const SecondWidgets = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignSelf: "center",

        width: "100%",
        alignSelf: "center",

        marginTop: 10,

        justifyContent: "space-evenly",
      }}
    >






      <View>






        <View
          style={{
            backgroundColor: "rgba(252,128,25,0.7)",
            height: 100,
            width: 100,
            borderRadius: 12,
            padding:2
          }}
        >
          <Image
            source={require("../assets/Genie.webp")}
            style={{ height: 100, width: 100, objectFit: "contain" }}
          />
        </View>
        <Text
          style={{
            justifyContent: "center",
            textAlign: "center",
            fontSize: 17,
          }}
        >
          Anything
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontWeight: 400,
            fontSize: 17,
            color: "black",
          }}
        >
          Delivered
        </Text>
      </View>



      {/* this is the health hub of the second widget  */}

      <View>
        <View
          style={{
            backgroundColor: "rgba(252,128,25,0.7)",
            height: 100,
            width: 100,
            borderRadius: 12,
          }}
        >
          <Image
            source={require("../assets/healthhub.jpeg")}
            style={{ height: 100, width: 100, objectFit: "contain" }}
          />
        </View>
        <Text
          style={{
            justifyContent: "center",
            textAlign: "center",
            fontSize: 17,
          }}
        >
          Health
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontWeight: 400,
            fontSize: 17,
            color: "black",
          }}
        >
          Hub
        </Text>
      </View>

      {/* This is teh fresh meat and veggies section of the widget */}

      <View>
        <View
          style={{
            backgroundColor: "rgba(252,128,25,0.7)",
            height: 100,
            width: 100,
            borderRadius: 12,
          }}
        >
          <Image
            source={require("../assets/chickenmeat.webp")}
            style={{ height: 100, width: 100, objectFit: "contain" }}
          />
        </View>
        <Text
          style={{
            justifyContent: "center",
            textAlign: "center",
            fontSize: 17,
          }}
        >
          Fresh Meat &
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontWeight: 400,
            fontSize: 17,
            color: "black",
          }}
        >
           Seafood
        </Text>
      </View>

      {/* this is the gourmet foods corner */}

      <View>
        <View
          style={{
            backgroundColor: "rgba(252,128,25,0.7)",
            height: 100,
            width: 100,
            borderRadius: 12,
          }}
        >
          <Image
            source={require("../assets/gourmetswiggy.jpeg")}
            style={{ height: 100, width: 100, objectFit: "contain" }}
          />
        </View>
        <Text
          style={{
            justifyContent: "center",
            textAlign: "center",
            fontSize: 17,
          }}
        >
          Gourmet
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontWeight: 400,
            fontSize: 17,
            color: "black",
          }}
        >
          Stores
        </Text>
      </View>
    </View>
  );
}
export default SecondWidgets
const styles = StyleSheet.create({})