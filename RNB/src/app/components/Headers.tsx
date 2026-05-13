import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useSafeAreaInsets} from 'react-native-safe-area-context'

const Headers = () => {

    const insets = useSafeAreaInsets();

  return (
    <View style = {StyleSheet.flatten([styles.container, {paddingTop: insets.top}])}>
      <View>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text>Notes</Text>
        <View>
            <Ionicons name="search" size={24} color="black" />
            <Ionicons name="notifications" size={24} color="black" />
            <Ionicons name="person" size={24} color="black" />
        </View>
      </View>
    </View>
  )
}

export default Headers

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})