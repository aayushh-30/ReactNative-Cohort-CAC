import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

const cartItems = [
  {
    id: '1',
    name: 'Cheese Burger',
    restaurant: 'Burger Hub',
    price: 199,
    quantity: 1,
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
  },

  {
    id: '2',
    name: 'Farmhouse Pizza',
    restaurant: 'Pizza Point',
    price: 399,
    quantity: 2,
    image:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591',
  },

  {
    id: '3',
    name: 'Butter Chicken',
    restaurant: 'Spice Kitchen',
    price: 349,
    quantity: 1,
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
  },
];

const CartScreen = () => {

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const renderCartItem = ({item}) => {
    return (
      <View style={styles.card}>
        
        <Image
          source={{uri: item.image}}
          style={styles.image}
        />

        <View style={styles.content}>
          
          <Text style={styles.itemName}>
            {item.name}
          </Text>

          <Text style={styles.restaurant}>
            {item.restaurant}
          </Text>

          <Text style={styles.price}>
            ₹{item.price}
          </Text>

          {/* Quantity */}
          <View style={styles.quantityContainer}>
            
            <Pressable style={styles.qtyButton}>
              <Text style={styles.qtyText}>-</Text>
            </Pressable>

            <Text style={styles.quantity}>
              {item.quantity}
            </Text>

            <Pressable style={styles.qtyButton}>
              <Text style={styles.qtyText}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        
        <Text style={styles.heading}>
          Your Cart 🛒
        </Text>

        <Text style={styles.subHeading}>
          Review your delicious order
        </Text>
      </View>

      {/* Cart Items */}
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 220,
        }}
      />

    </SafeAreaView>
  );
};

export default CartScreen;

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
    fontSize: 15,
    color: '#666',
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 22,
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
    width: 120,
    height: 120,
  },

  content: {
    flex: 1,
    padding: 14,
    justifyContent: 'center',
  },

  itemName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#131922',
  },

  restaurant: {
    marginTop: 5,
    color: '#777',
    fontSize: 14,
  },

  price: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: '700',
    color: '#FE5A00',
  },

  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
  },

  qtyButton: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: '#FFF2EB',
    justifyContent: 'center',
    alignItems: 'center',
  },

  qtyText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FE5A00',
  },

  quantity: {
    marginHorizontal: 16,
    fontSize: 16,
    fontWeight: '700',
    color: '#131922',
  },

  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,

    backgroundColor: '#fff',
    paddingHorizontal: 22,
    paddingTop: 20,
    paddingBottom: 30,

    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,

    elevation: 10,
  },

  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  totalText: {
    fontSize: 18,
    color: '#666',
    fontWeight: '600',
  },

  totalPrice: {
    fontSize: 28,
    fontWeight: '800',
    color: '#131922',
  },

  checkoutButton: {
    backgroundColor: '#FE5A00',
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: 'center',

    shadowColor: '#FE5A00',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,

    elevation: 8,
  },

  checkoutText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});