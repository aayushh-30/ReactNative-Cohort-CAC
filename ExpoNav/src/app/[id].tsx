import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const idPage = () => {
    let {id} = useLocalSearchParams()
  return (
    <View>
      <Text >idPage : {id}</Text>
    </View>
  )
}

export default idPage

const styles = StyleSheet.create({})