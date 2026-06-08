import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import useLight from '../hooks/use-Light'

const Light = () => {
    const {available, light} = useLight();
  return (
    <SafeAreaView>
      <Text>Light : {light}</Text>
    </SafeAreaView>
  )
}

export default Light

const styles = StyleSheet.create({})