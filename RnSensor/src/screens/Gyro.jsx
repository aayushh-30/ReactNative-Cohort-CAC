import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import useGyro from '../hooks/use-Gyro'

const Gyro = () => {
    const {available, x, y, z} = useGyro();
  const maxOffset = 80;
  const offsetX = Math.max(-1, Math.min(1, x)) * maxOffset;
  const offsetY = Math.max(-1, Math.min(1, y)) * maxOffset;

  return (
    <SafeAreaView style = {styles.container}>
      <View style = {styles.card}>
        <View style={[styles.movingCard, { transform: [{ translateX: offsetX }, { translateY: offsetY }] }]} />
        <Text style = {styles.cardText}>X : {x.toFixed(3)}</Text>
        <Text style = {styles.cardText}>Y : {y.toFixed(3)}</Text>
        <Text style = {styles.cardText}>Z : {z.toFixed(3)}</Text>
        {!available && <Text style={[styles.cardText, {marginTop:12}]}>Gyroscope not available</Text>}
      </View>
    </SafeAreaView>
  )
}

export default Gyro

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#080808",
        alignItems: "center",
        paddingHorizontal : 15,
        paddingVertical : 20
    },
    card : {
        width: '88%',
        maxWidth: 340,
        minHeight: 320,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 20,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardText : {
        fontSize : 20,
        color : "#fff"
    }
    ,
    movingCard: {
      width: 100,
      height: 100,
      borderRadius: 12,
      marginBottom: 12,
      borderWidth: 1,
      borderColor: '#fff',
      backgroundColor: '#1E90FF'
    }
    
})