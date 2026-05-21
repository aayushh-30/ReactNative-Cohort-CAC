import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';


const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />

      {/* Background Shapes */}
      <View style={styles.topCircle} />
      <View style={styles.smallCircle} />

      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>
          Welcome Back to{' '}
          <Text style={styles.highlight}>FoodFox</Text>
        </Text>

        <Text style={styles.subHeading}>
          Login to continue ordering your favorite meals
        </Text>
      </View>

      {/* Form */}
      <View style={styles.formContainer}>
        {/* Email */}
        <View style={styles.inputBox}>
          <Text style={styles.label}>Email</Text>

          <TextInput
            placeholder="Enter your email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            keyboardType="email-address"
          />
        </View>

        {/* Password */}
        <View style={styles.inputBox}>
          <Text style={styles.label}>Password</Text>

          <TextInput
            placeholder="Enter your password"
            placeholderTextColor="#999"
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            secureTextEntry
          />
        </View>

        
        <Pressable>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </Pressable>

        
        <Pressable style={styles.loginButton} onPress={() => navigation.reset({index: 0, routes: [{name: 'HomeScreen'}]})}>
          <Text style={styles.loginText}>Login</Text>
        </Pressable>

        
        <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line} />
        </View>

        {/* Signup */}
        <View style={styles.bottomContainer}>
          <Text style={styles.bottomText}>
            Don’t have an account?
          </Text>

          <Pressable>
            <Text style={styles.signupText} onPress={() => navigation.replace("SignupScreen")}> Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
  },

  topCircle: {
    position: 'absolute',
    width: 350,
    height: 350,
    borderRadius: 175,
    backgroundColor: '#FFF2EB',
    top: -120,
    left: -80,
  },

  smallCircle: {
    position: 'absolute',
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#FFE4D6',
    right: -30,
    top: 120,
  },

  headerContainer: {
    marginTop: 90,
  },

  heading: {
    fontSize: 34,
    fontWeight: '800',
    color: '#131922',
    lineHeight: 44,
  },

  highlight: {
    color: '#FE5A00',
  },

  subHeading: {
    marginTop: 14,
    color: '#6E6E6E',
    fontSize: 15,
    lineHeight: 24,
  },

  formContainer: {
    marginTop: 60,
  },

  inputBox: {
    marginBottom: 24,
  },

  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#131922',
    marginBottom: 10,
  },

  input: {
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#ECECEC',
    borderRadius: 18,
    paddingHorizontal: 18,
    paddingVertical: 16,
    fontSize: 15,
    color: '#131922',
  },

  forgotText: {
    alignSelf: 'flex-end',
    color: '#FE5A00',
    fontWeight: '600',
    marginBottom: 28,
  },

  loginButton: {
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

  loginText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E5E5',
  },

  orText: {
    marginHorizontal: 14,
    color: '#888',
    fontWeight: '600',
  },

  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },

  bottomText: {
    color: '#666',
    fontSize: 15,
  },

  signupText: {
    color: '#FE5A00',
    fontWeight: '700',
    fontSize: 15,
  },
});