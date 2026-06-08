import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style = {styles.headerContainer} >
        <Text style = {{color: "white", fontSize: 40}}>SNIPPETS</Text>
        <Ionicons name="search" size={24} color="white" />
      </View>
      <View>
        <View style = {styles.searchBox}>
          <Ionicons name="search" size={24} color="white" />
          <TextInput 
          placeholder='Search' 
          placeholderTextColor="white"
          style = {{flex: 1}}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "black",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: "white"
  },
  headerContainer : {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    paddingHorizontal: 10,
    gap: 10,
  }
})