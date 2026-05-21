import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  Pressable,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {SafeAreaView} from 'react-native-safe-area-context';

const restaurants = [
  {
    id: '1',
    name: 'Burger Hub',
    category: 'Burger • Fast Food',
    rating: '4.8',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
  },

  {
    id: '2',
    name: 'Pizza Point',
    category: 'Pizza • Italian',
    rating: '4.7',
    image:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591',
  },

  {
    id: '3',
    name: 'Spice Kitchen',
    category: 'Indian • Curry',
    rating: '4.6',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
  },

  {
    id: '4',
    name: 'Healthy Bowl',
    category: 'Healthy • Salad',
    rating: '4.9',
    image:
      'https://images.unsplash.com/photo-1547592180-85f173990554',
  },
];

const SearchScreen = ({navigation}) => {

  const [search, setSearch] = useState('');

  const filteredRestaurants = restaurants.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  const renderRestaurant = ({item}) => {
    return (
      <Pressable
        style={styles.card}
        onPress={() =>
          navigation.navigate('RestaurantDetails', {
            restaurant: item,
          })
        }>
        
        <Image
          source={{uri: item.image}}
          style={styles.image}
        />

        <View style={styles.cardContent}>
          
          <Text style={styles.name}>
            {item.name}
          </Text>

          <Text style={styles.category}>
            {item.category}
          </Text>

          <Text style={styles.rating}>
            ⭐ {item.rating}
          </Text>
        </View>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.heading}>
          Search Food 🍕
        </Text>

        <Text style={styles.subHeading}>
          Find your favorite restaurants
        </Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        
        <Ionicons
          name="search"
          size={22}
          color="#888"
        />

        <TextInput
          placeholder="Search restaurants..."
          placeholderTextColor="#999"
          value={search}
          onChangeText={setSearch}
          style={styles.input}
        />
      </View>

      {/* Restaurant List */}
      <FlatList
        data={filteredRestaurants}
        renderItem={renderRestaurant}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 30,
        }}
      />
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 18,
  },

  header: {
    marginTop: 20,
    marginBottom: 24,
  },

  heading: {
    fontSize: 30,
    fontWeight: '800',
    color: '#131922',
  },

  subHeading: {
    marginTop: 8,
    fontSize: 15,
    color: '#666',
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#ECECEC',
    borderRadius: 18,
    paddingHorizontal: 16,
    marginBottom: 24,
  },

  input: {
    flex: 1,
    paddingVertical: 15,
    paddingLeft: 12,
    fontSize: 15,
    color: '#131922',
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 18,
    overflow: 'hidden',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,

    elevation: 4,
  },

  image: {
    width: 110,
    height: 110,
  },

  cardContent: {
    flex: 1,
    padding: 14,
    justifyContent: 'center',
  },

  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#131922',
  },

  category: {
    marginTop: 6,
    color: '#777',
    fontSize: 14,
  },

  rating: {
    marginTop: 10,
    color: '#FE5A00',
    fontWeight: '700',
  },
});