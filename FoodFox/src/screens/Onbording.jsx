import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  StatusBar,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Onbording = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />

      
      <View style={styles.topCircle} />
      <View style={styles.smallCircle} />

      
      <Image
        source={require('../../assets/FoodFox/FoodFoxLogo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      
      <View style={styles.textContainer}>
        <Text style={styles.heading}>
          Fast Delivery at{'\n'}
          your <Text style={styles.highlight}>Doorstep</Text>
        </Text>

        <Text style={styles.subHeading}>
          Fresh food from your favorite restaurants delivered quickly anytime.
        </Text>
      </View>

      {/* Button */}
      <Pressable
        onPress={() => navigation.navigate('LoginScreen')}
        style={({pressed}) => [
          styles.button,
          {
            opacity: pressed ? 0.8 : 1,
            transform: [{scale: pressed ? 0.98 : 1}],
          },
        ]}>
        <Text style={styles.buttonText}>Get Started</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Onbording;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 24,
  },

  topCircle: {
    position: 'absolute',
    width: 420,
    height: 420,
    borderRadius: 210,
    backgroundColor: '#FFF2EB',
    top: -120,
  },

  smallCircle: {
    position: 'absolute',
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#FFE4D6',
    right: -40,
    top: 80,
  },

  logo: {
    width: 340,
    height: 340,
    marginTop: 70,
  },

  textContainer: {
    alignItems: 'center',
    marginTop: -10,
  },

  heading: {
    fontSize: 34,
    fontWeight: '800',
    textAlign: 'center',
    color: '#131922',
    lineHeight: 42,
  },

  highlight: {
    color: '#FE5A00',
  },

  subHeading: {
    fontSize: 15,
    color: '#7A7A7A',
    textAlign: 'center',
    marginTop: 18,
    lineHeight: 24,
    paddingHorizontal: 18,
  },

  button: {
    backgroundColor: '#FE5A00',
    width: '100%',
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: 'center',
    position: 'absolute',
    bottom: 45,

    shadowColor: '#FE5A00',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,

    elevation: 8,
  },

  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});