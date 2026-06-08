import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { File, Directory, Paths } from 'expo-file-system';

const createFolder = async () => {
  const directory = new Directory(Paths.cache, "MyFolder");
  console.log(directory.exists)
  console.log(directory.uri)
  await directory.create();
  console.log(directory.exists)
}
const FilesExpo = () => {
  return (
    <View>
      <Text>Files</Text>
    </View>
  )
}

export default FilesExpo

const styles = StyleSheet.create({})