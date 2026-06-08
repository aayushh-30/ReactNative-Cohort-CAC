import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as SQLite from 'expo-sqlite'
import { SafeAreaView } from 'react-native-safe-area-context';

const db = await SQLite.openDatabaseAsync('test.db');


const createDb = () => {
    try {
        db.execSync(`
    CREATE TABLE IF NOT EXISTS test (
        id INTEGER PRIMARY KEY NOT NULL,
        name VARCHAR(30),
        age INTEGER,
        sex VARCHAR(1)

    )
    `);
    console.log("Table Created.")
        
    } catch (error) {
        console.log(error)
    }
    
}

const insertData = (name,age,sex) => {
    try {
        db.execSync(`INSERT INTO test (name,age,sex) VALUES (?,?,?)`,[name,age,sex]);
        console.log("Data Inserted.")
    } catch (error) {
        console.log(error)
    }
}

const getData = () => {
    try {
        const result = db.execSync(`SELECT * FROM test`);
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}
const Sql = () => {
  return (
    <SafeAreaView>
      <Text>Sql</Text>
      <Button title='Create Db' onPress={createDb}/>
      <Button title='Insert Data' onPress={insertData}/>
    <Button title='Get Data' onPress={getData}/>
    </SafeAreaView>
  )
}

export default Sql

const styles = StyleSheet.create({})