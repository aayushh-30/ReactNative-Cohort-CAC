import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
  Pressable,
} from 'react-native';

const foodItems = {
  'Burger Hub': [
    {
      id: '1',
      name: 'Cheese Burger',
      price: '₹199',
    },

    {
      id: '2',
      name: 'French Fries',
      price: '₹99',
    },

    {
      id: '3',
      name: 'Chicken Burger',
      price: '₹249',
    },

    {
      id: '4',
      name: 'Cold Coffee',
      price: '₹149',
    },
  ],

  'Pizza Point': [
    {
      id: '1',
      name: 'Farmhouse Pizza',
      price: '₹399',
    },

    {
      id: '2',
      name: 'Veggie Pizza',
      price: '₹299',
    },

    {
      id: '3',
      name: 'Garlic Bread',
      price: '₹129',
    },

    {
      id: '4',
      name: 'Coke',
      price: '₹59',
    },
  ],

  'Spice Kitchen': [
    {
      id: '1',
      name: 'Butter Chicken',
      price: '₹349',
    },

    {
      id: '2',
      name: 'Paneer Tikka',
      price: '₹279',
    },

    {
      id: '3',
      name: 'Naan',
      price: '₹49',
    },

    {
      id: '4',
      name: 'Biryani',
      price: '₹299',
    },
  ],

  'Healthy Bowl': [
    {
      id: '1',
      name: 'Salad Bowl',
      price: '₹249',
    },

    {
      id: '2',
      name: 'Fruit Smoothie',
      price: '₹199',
    },

    {
      id: '3',
      name: 'Protein Wrap',
      price: '₹229',
    },

    {
      id: '4',
      name: 'Avocado Toast',
      price: '₹189',
    },
  ],
};

const RestaurantDetailsScreen = ({route}) => {

  const {restaurant} = route.params;

  const items = foodItems[restaurant.name];

  const renderFoodItem = ({item}) => {
    return (
      <View style={styles.foodCard}>
        
        <View>
          <Text style={styles.foodName}>
            {item.name}
          </Text>

          <Text style={styles.foodPrice}>
            {item.price}
          </Text>
        </View>

        <Pressable style={styles.addButton}>
          <Text style={styles.addText}>
            Add
          </Text>
        </Pressable>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      
      <Image
        source={{uri: restaurant.image}}
        style={styles.banner}
      />

      <View style={styles.infoContainer}>
        
        <Text style={styles.restaurantName}>
          {restaurant.name}
        </Text>

        <Text style={styles.restaurantInfo}>
          ⭐ {restaurant.rating} • {restaurant.time}
        </Text>

        <Text style={styles.sectionTitle}>
          Popular Items
        </Text>

        <FlatList
          data={items}
          renderItem={renderFoodItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default RestaurantDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  banner: {
    width: '100%',
    height: 260,
  },

  infoContainer: {
    flex: 1,
    marginTop: -25,
    backgroundColor: '#fff',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 20,
  },

  restaurantName: {
    fontSize: 30,
    fontWeight: '800',
    color: '#131922',
  },

  restaurantInfo: {
    marginTop: 8,
    color: '#666',
    fontSize: 15,
  },

  sectionTitle: {
    marginTop: 25,
    marginBottom: 16,
    fontSize: 20,
    fontWeight: '700',
    color: '#131922',
  },

  foodCard: {
    backgroundColor: '#FFF7F3',
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  foodName: {
    fontSize: 17,
    fontWeight: '700',
    color: '#131922',
  },

  foodPrice: {
    marginTop: 6,
    color: '#FE5A00',
    fontWeight: '700',
  },

  addButton: {
    backgroundColor: '#FE5A00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
  },

  addText: {
    color: '#fff',
    fontWeight: '700',
  },
});