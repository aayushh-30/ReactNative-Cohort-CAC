import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import {
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
    
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const NoteEditorScreen = () => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  return (
    <SafeAreaView style={styles.container}>
    <KeyboardAvoidingView
    style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {/* Header */}
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
        }}
        style={styles.header}
      >
        <View style={styles.headerTop}>
          
          {/* Back Button */}
          <Pressable style={styles.iconButton}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </Pressable>

          {/* Save Button */}
          <Pressable style={styles.saveButton}>
            <Text style={styles.saveText}>Save</Text>
          </Pressable>

        </View>
      </ImageBackground>

      {/* Inputs */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
          style={styles.titleInput}
        />

        <TextInput
          placeholder="Write your note..."
          value={note}
          onChangeText={setNote}
          multiline
          textAlignVertical="top"
          style={styles.noteInput}
        />
      </View>
    </KeyboardAvoidingView>
  </SafeAreaView>
  );
};

export default NoteEditorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    height: 180,
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  iconButton: {
    padding: 10,
  },

  saveButton: {
    backgroundColor: "#2563EB",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 10,
  },

  saveText: {
    color: "white",
    fontWeight: "bold",
  },

  inputContainer: {
    flex: 1,
    padding: 20,
  },

  titleInput: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  noteInput: {
    flex: 1,
    fontSize: 18,
  },
});