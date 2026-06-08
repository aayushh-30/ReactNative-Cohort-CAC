import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useDM from '../hooks/use-DM'

const DeviceMot = () => {
    const {available, data} = useDM();
    console.log(data)
  return (
    <View>
      <Text>DeviceMot</Text>
    </View>
  )
}

export default DeviceMot

const styles = StyleSheet.create({})