import { StyleSheet, Text, View ,BackgroundImage,Image} from 'react-native'
import { AntDesign } from "@expo/vector-icons";
const WidgetsSection = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "#f50",
          height: 200,
          width: 200,
          borderRadius: 12,
        }}
      >
        <View style={{ paddingLeft: 12, paddingTop: 10 }}>
          <Text
            style={{
              color: "white",
              fontWeight: "800",
              fontSize: 24,
            }}
          >
            Restaurents
          </Text>
          <Text style={{ color: "white", fontSize: 18 }}>No contact</Text>
          <Text style={{ color: "white", fontSize: 18 }}>delivery</Text>
        </View>

        <View
          style={{
            backgroundColor: "rgba(235,40,0,0.7)",
            height: 50,
            borderRadius: 12,
            top: 70,
            width: 200,
            alignItems: "center",

            flexDirection: "row",
          }}
        >
          <AntDesign
            name="arrowright"
            size={30}
            color="white"
            style={{ marginLeft: 12 }}
          />
          <Image
            source={{
              uri: "https://static.toiimg.com/thumb/msid-96590900,width-960,height-1280,resizemode-6.cms",
            }}
            style={{
              height: 100,
              width: 100,
              position: "absolute",
              bottom: 1,
              overflow: "hidden",
              right: 0,
              borderTopLeftRadius: 15,
            }}
          />
        </View>
      </View>
      <View
        style={{
          backgroundColor: "rgba(255,40,80,0.4)",
          height: 200,
          width: 200,
          borderRadius: 12,
        }}
      >
        <View style={{ paddingLeft: 12, paddingTop: 10 }}>
          <Text
            style={{
              color: "white",
              fontWeight: "800",
              fontSize: 24,
            }}
          >
            InstaMart
          </Text>
          <Text style={{ color: "white", fontSize: 18 }}>Pick from</Text>
          <Text style={{ color: "white", fontSize: 18 }}>2000+ items</Text>
        </View>

        <View
          style={{
            backgroundColor: "rgba(200,40,40,0.7)",
            height: 50,
            borderRadius: 12,
            top: 70,
            width: 200,
            alignItems: "center",

            flexDirection: "row",
          }}
        >
          <AntDesign
            name="arrowright"
            size={30}
            color="white"
            style={{ marginLeft: 12 }}
          />
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsG-aRbw1CudC0hOxCy2HwDAYQoMqb9Esnew&usqp=CAU",
            }}
            style={{
              height: 100,
              width: 100,
              position: "absolute",
              bottom: 1,
              overflow: "hidden",
              right: 0,
              borderTopLeftRadius: 15,
            }}
          />
        </View>
      </View>
    </View>
  );
}
export default WidgetsSection
const styles = StyleSheet.create({})