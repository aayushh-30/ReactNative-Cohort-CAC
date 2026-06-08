import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useState} from 'react'
import * as AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView} from 'react-native-safe-area-context'

const AsStorage = () => {
  const [data,setData] = useState("")

  const insertData = async () => {
    await AsyncStorage.setItem("name","Ayush")
    console.log("Data Inserted")
  }

  const removeData = async () => {
    await AsyncStorage.removeItem("name")
    console.log("Data Removed")
  }

  const getData = async () => {
    const fetchedData = await AsyncStorage.getItem("name");
    setData(fetchedData)
    console.log("Data fetched")
  }

  return (
    <SafeAreaView style = {styles.container}>
      <View><Text>Async Storage Demo</Text></View>
      <View>
        <TouchableOpacity style = {styles.Btn} onPress={()=>insertData()}><Text>Add Data</Text></TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}

export default AsStorage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  Btn: {
    borderRadius: 10,
    textAlign: "center",
    borderWidth:2,
    paddingHorizontal:30,
    paddingVertical: 10,
    backgroundColor: "rgb(30, 169, 228)"
  }
})