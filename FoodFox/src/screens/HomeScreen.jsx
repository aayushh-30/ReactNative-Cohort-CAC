import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'

const restaurants = [
  {
    id: '1',
    name: 'Burger Hub',
    rating: '4.8',
    time: '20-25 min',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
  },

  {
    id: '2',
    name: 'Pizza Point',
    rating: '4.7',
    time: '25-30 min',
    image:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591',
  },

  {
    id: '3',
    name: 'Spice Kitchen',
    rating: '4.6',
    time: '15-20 min',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
  },

  {
    id: '4',
    name: 'Healthy Bowl',
    rating: '4.9',
    time: '10-15 min',
    image:
      'https://images.unsplash.com/photo-1547592180-85f173990554',
  },
];

const HomeScreen = ({navigation}) => {
  const renderRestaurant = ({item}) => {
    return (
      <Pressable
        style={styles.card}
        onPress={() =>
          navigation.navigate('RestaurantDetailsScreen', {
            restaurant: item,
          })
        }>
        
        <Image
          source={{uri: item.image}}
          style={styles.cardImage}
        />

        <View style={styles.cardContent}>
          <Text style={styles.restaurantName}>
            {item.name}
          </Text>

          <View style={styles.row}>
            <Text style={styles.rating}>
              ⭐ {item.rating}
            </Text>

            <Text style={styles.time}>
              • {item.time}
            </Text>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.heading}>
          Discover Delicious Food 🍔
        </Text>

        <Text style={styles.subHeading}>
          Fast delivery from your favorite places
        </Text>
      </View>

      <FlatList
        data={restaurants}
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

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 18,
  },

  header: {
    marginTop: 20,
    marginBottom: 20,
  },

  heading: {
    fontSize: 30,
    fontWeight: '800',
    color: '#131922',
  },

  subHeading: {
    marginTop: 8,
    color: '#666',
    fontSize: 15,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 24,
    marginBottom: 22,
    overflow: 'hidden',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,

    elevation: 4,
  },

  cardImage: {
    width: '100%',
    height: 200,
  },

  cardContent: {
    padding: 18,
  },

  restaurantName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#131922',
  },

  row: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },

  rating: {
    color: '#FE5A00',
    fontWeight: '700',
    fontSize: 15,
  },

  time: {
    color: '#777',
    marginLeft: 8,
    fontSize: 14,
  },
});