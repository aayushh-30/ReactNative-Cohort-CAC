import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useEffect,useState } from "react";
import axios from 'axios'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function BackendIntegration() {

  const [data,setData] = useState(""); //192.168.1.104
  useEffect(()=>{
    async function FetchData(){
      const fetchedResponse = await axios.get("http://192.168.1.104:3000");
      const Data = fetchedResponse.data
      console.log(Data)
      setData(Data)
    }
    FetchData()
  },[])

  // async function FetchData(){
  //     const fetchedResponse = await axios.get("http://192.168.1.104:3000");
  //     const Data = fetchedResponse.data
  //     console.log(Data)
  //     setData(Data)
  //   }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button} activeOpacity={0.85}>
        <Text style={styles.buttonText}>Test Backend</Text>
      </TouchableOpacity>
      <View style={styles.outputBox}>
          <Text style = {{color:"white"}}>{data["message"]}</Text>
      </View>
      <View style = {{flexDirection: "row"}}>
        <TouchableOpacity>
          <Text style={styles.buttonText}>GET</Text>
        </TouchableOpacity>
        <View style={styles.outputBox}>
          <Text style = {{color:"white"}}>{data["message"]}</Text>
      </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0f14",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
  },
  button: {
    backgroundColor: "#1f2937",
    borderColor: "#334155",
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 18,
    paddingVertical: 12,
    minWidth: 160,
    alignItems: "center",
  },
  buttonText: {
    color: "#f8fafc",
    fontSize: 16,
    fontWeight: "600",
  },
  outputBox: {
    width: "100%",
    maxWidth: 360,
    minHeight: 48,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#243041",
    backgroundColor: "#111827",
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: "#cbd5e1",
  },
});
