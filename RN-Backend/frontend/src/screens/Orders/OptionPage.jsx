import React from 'react'
import { FlatList, StyleSheet, Text, View, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'

const DATA = [
  {
    id: '1',
    title: 'First Item',
    meta: 'Minimal black and white layout',
  },
  {
    id: '2',
    title: 'Second Item',
    meta: 'Clean spacing and strong contrast',
  },
  {
    id: '3',
    title: 'Third Item',
    meta: 'Static UI only, no interaction logic',
  },
]




const OptionPage = () => {
    const [dataCount, setDataCount] = useState(0);
    const [selectedItem, setSelectedItem] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.kicker}>Orders</Text>
        <Text style={styles.title}>Option Page</Text>
      </View>

      <View style={styles.countCard}>
        <Text style={styles.countLabel}>Count Item</Text>
        <Text style={styles.countValue}>{dataCount}</Text>
        <Text style={styles.countHint}>Items ready for selection</Text>
      </View>

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <Pressable style={styles.itemCard} onPress={() => setDataCount(dataCount+1)} >
            <Text style={styles.itemIndex}>{String(index + 1).padStart(2, '0')}</Text>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemMeta}>{item.meta}</Text>
          </Pressable>
        )}
      />
    </SafeAreaView>
  )
}

export default OptionPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  header: {
    marginBottom: 16,
  },
  kicker: {
    color: '#ffffff',
    fontSize: 12,
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 6,
    opacity: 0.75,
  },
  title: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  countCard: {
    borderWidth: 1,
    borderColor: '#ffffff',
    backgroundColor: '#0f0f0f',
    borderRadius: 28,
    paddingVertical: 24,
    paddingHorizontal: 20,
    marginBottom: 18,
  },
  countLabel: {
    color: '#ffffff',
    fontSize: 14,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    opacity: 0.7,
    marginBottom: 10,
  },
  countValue: {
    color: '#ffffff',
    fontSize: 54,
    fontWeight: '900',
    lineHeight: 56,
  },
  countHint: {
    color: '#ffffff',
    fontSize: 13,
    opacity: 0.7,
    marginTop: 8,
  },
  list: {
    gap: 12,
  },
  itemCard: {
    borderWidth: 1,
    borderColor: '#ffffff',
    backgroundColor: '#111111',
    borderRadius: 24,
    padding: 18,
  },
  itemIndex: {
    color: '#ffffff',
    fontSize: 12,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    opacity: 0.65,
    marginBottom: 10,
  },
  itemTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 6,
  },
  itemMeta: {
    color: '#ffffff',
    fontSize: 13,
    opacity: 0.72,
  },
})