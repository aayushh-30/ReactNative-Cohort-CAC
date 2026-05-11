import { SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  StatusBar,
  useWindowDimensions,
  TextInput,
  useColorScheme
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import lightTheme from "./themes/LightTheme.js";
import darkTheme from "./themes/DarkTheme.js";
import FloatingButton from "./components/FloatingButton";

const NotesListing = () => {
  
  const [search, setSearch] = useState("");

  
  const { width, height } = useWindowDimensions();
  
  // Manual Theme Selection
  const [darkMode, setDarkMode] = useState(false);
  const theme = darkMode ? darkTheme : lightTheme;

  // This is for system level theme selection
  // const systemTheme = useColorScheme();
  // const theme = systemTheme === "dark" ? darkTheme : lightTheme;

  const DATA = [
    {
      id: "1",
      title: "Buy Veggies",
      content: "Buy some vegetables",
      date: "Today",
      isFavourite: true,
    },
    {
      id: "2",
      title: "Go Gym",
      content: "Leg Day",
      date: "Today",
      isFavourite: true,
    },
    {
      id: "3",
      title: "Drink Water",
      content: "Drink upto 3L daily",
      date: "Yesterday",
      isFavourite: true,
    },
    {
      id: "4",
      title: "Drink Water",
      content: "Drink upto 3L daily",
      date: "Yesterday",
      isFavourite: false,
    },
    {
      id: "5",
      title: "Drink Water",
      content: "Drink upto 3L daily",
      date: "Yesterday",
      isFavourite: true,
    },
  ];

  const filterData = DATA.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: theme.background },
      ]}
    >
      <StatusBar
        barStyle={darkMode ? "light-content" : "dark-content"}
      />

      {/* Top Bar */}
      <View style={styles.taskBarContainer}>
        <Pressable>
          <Ionicons name="menu" size={30} color={theme.text} />
        </Pressable>
        
        <Pressable onPress={() => setDarkMode(!darkMode)}>
          <Ionicons
            name={darkMode ? "sunny-outline" : "moon-outline"}
            size={28}
            color={theme.text}
          />
        </Pressable>
      </View>

      {/* Heading */}
      <View style={styles.headingContainer}>
        <Text
          style={[
            styles.heading,
            {
              color: theme.text,
              fontSize: width * 0.1,
            },
          ]}
        >
          Notes
        </Text>
      </View>

      {/* Option Bar */}
      <View style={styles.optionBar}>
        <Pressable
          style={[
            styles.optionBox,
            {
              backgroundColor: theme.card,
              borderColor: theme.border,
            },
          ]}
        >
          <Ionicons
            name="square-outline"
            size={16}
            color={theme.text}
          />
          <Text style={[styles.optionText, { color: theme.text }]}>
            All Notes
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.optionBox,
            {
              backgroundColor: theme.card,
              borderColor: theme.border,
            },
          ]}
        >
          <Ionicons
            name="star-outline"
            size={16}
            color={theme.text}
          />
          <Text
            style={StyleSheet.flatten([
              styles.optionText,
              { color: theme.text },
            ])}
          >
            Favourites
          </Text>
        </Pressable>

        <Pressable
          style={StyleSheet.flatten([
            styles.optionBox,
            {
              backgroundColor: theme.card,
              borderColor: theme.border,
            },
          ])}
        >
          <Ionicons
            name="trash-outline"
            size={16}
            color={theme.text}
          />
          <Text
            style={StyleSheet.flatten([
              styles.optionText,
              { color: theme.text },
            ])}
          >
            Trash
          </Text>
        </Pressable>
      </View>

      {/* Search Bar */}
      <View>
        <View style={[styles.searchBarBox, { borderColor: theme.border }]}>
          <Ionicons
            name="search-outline"
            size={20}
            color={theme.text}
          />
          <TextInput
            placeholder="Search"
            placeholderTextColor={theme.text}
            style={StyleSheet.flatten([styles.searchBar,{color: theme.text}])}
            value={search}
            onChangeText={setSearch}
          />

        </View>

      </View>

      {/* Notes List */}
      <View style={styles.notesContainer}>
        <FlatList
          data={filterData}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatListContainer}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Pressable
              style={({ pressed }) => [
                StyleSheet.flatten([
                  styles.noteCard,
                  { backgroundColor: theme.card },
                ]),
                {
                  opacity: pressed ? 0.8 : 1,
                },
              ]}
            >
              {/* Left Icon */}
              <View
                style={StyleSheet.flatten([
                  styles.iconContainer,
                  { backgroundColor: theme.iconBackground },
                ])}
              >
                <Ionicons
                  name="document-text-outline"
                  size={32}
                  color="#2563EB"
                />
              </View>

              {/* Center Content */}
              <View style={styles.noteContent}>
                <Text
                  numberOfLines={1}
                  style={StyleSheet.flatten([
                    styles.noteTitle,
                    { color: theme.text },
                  ])}
                >
                  {item.title}
                </Text>

                <Text
                  numberOfLines={2}
                  style={StyleSheet.flatten([
                    styles.noteDescription,
                    { color: theme.subText },
                  ])}
                >
                  {item.content}
                </Text>

                <View
                  style={StyleSheet.flatten([
                    styles.dateBadge,
                    { backgroundColor: theme.badge },
                  ])}
                >
                  <Text
                    style={StyleSheet.flatten([
                      styles.dateText,
                      { color: theme.subText },
                    ])}
                  >
                    {item.date}
                  </Text>
                </View>
              </View>

              {/* Right Section */}
              <View style={styles.rightSection}>
                <Ionicons
                  name={
                    item.isFavourite
                      ? "star"
                      : "star-outline"
                  }
                  size={20}
                  color="#FACC15"
                />

                <Pressable style={styles.menuButton}>
                  <Ionicons
                    name="ellipsis-vertical"
                    size={20}
                    color={theme.subText}
                  />
                </Pressable>
              </View>
            </Pressable>
          )}
        />
      </View>
      <FloatingButton />
    </SafeAreaView>
  );
};

export default NotesListing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 20,
  },

  taskBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headingContainer: {
    marginTop: 20,
    marginBottom: 18,
  },

  heading: {
    fontSize: 42,
    fontWeight: "700",
  },

  optionBar: {
    flexDirection: "row",
    marginBottom: 10,
    gap: 10,
  },

  optionBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 14,
    borderWidth: 1,
  },

  optionText: {
    fontSize: 13,
    fontWeight: "600",
  },

  notesContainer: {
    flex: 1,
    marginTop: 14,
  },

  flatListContainer: {
    paddingBottom: 30,
  },

  noteCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
    padding: 14,
    borderRadius: 22,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,

    elevation: 4,
  },

  iconContainer: {
    width: 68,
    height: 68,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },

  noteContent: {
    flex: 1,
    marginHorizontal: 14,
  },

  noteTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 5,
  },

  noteDescription: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 10,
  },

  dateBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },

  dateText: {
    fontSize: 12,
    fontWeight: "600",
  },

  rightSection: {
    alignItems: "center",
    justifyContent: "space-between",
    height: 65,
  },

  menuButton: {
    padding: 4,
  },

  searchBar: {
    width: "100%",
  },

  searchBarBox: {
    borderRadius: 14,
    flexDirection: "row",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 5,
    gap: 2
  },

});