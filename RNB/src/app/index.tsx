import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

import NotesListing from './NotesListing'
import ThemeChanging from './ThemeChanging'
import NoteEditorScreen from './NotesEditing'

const index = () => {
  //const inserts = useSafeAreaInsets();
  //console.log(inserts)
 
  return (
      <NoteEditorScreen />
  )
}

export default index

const styles = StyleSheet.create({})