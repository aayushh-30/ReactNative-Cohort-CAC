import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';



const SignupScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />

      
      <View style={styles.topCircle} />
      <View style={styles.smallCircle} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 40}}>
        
        
        <View style={styles.headerContainer}>
          <Text style={styles.heading}>
            Create your{' '}
            <Text style={styles.highlight}>Account</Text>
          </Text>

          <Text style={styles.subHeading}>
            Join FoodFox and get your favorite meals delivered fast
          </Text>
        </View>

        
        <View style={styles.formContainer}>
          
          
          <View style={styles.inputBox}>
            <Text style={styles.label}>Full Name</Text>

            <TextInput
              placeholder="Enter your full name"
              placeholderTextColor="#999"
              value={name}
              onChangeText={setName}
              style={styles.input}
            />
          </View>

          
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

          
          <View style={styles.inputBox}>
            <Text style={styles.label}>Phone Number</Text>

            <TextInput
              placeholder="Enter your phone number"
              placeholderTextColor="#999"
              value={phone}
              onChangeText={setPhone}
              style={styles.input}
              keyboardType="phone-pad"
            />
          </View>

          
          <View style={styles.inputBox}>
            <Text style={styles.label}>Password</Text>

            <TextInput
              placeholder="Create a password"
              placeholderTextColor="#999"
              value={password}
              onChangeText={setPassword}
              style={styles.input}
              secureTextEntry
            />
          </View>

          
          <Pressable style={styles.signupButton}>
            <Text style={styles.signupText}>Create Account</Text>
          </Pressable>

          
          <View style={styles.dividerContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.line} />
          </View>

          
          <View style={styles.bottomContainer}>
            <Text style={styles.bottomText}>
              Already have an account?
            </Text>

            <Pressable>
              <Text style={styles.loginText} onPress={()=>navigation.replace("LoginScreen")}> Login</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
  },

  topCircle: {
    position: 'absolute',
    width: 360,
    height: 360,
    borderRadius: 180,
    backgroundColor: '#FFF2EB',
    top: -130,
    left: -90,
  },

  smallCircle: {
    position: 'absolute',
    width: 170,
    height: 170,
    borderRadius: 85,
    backgroundColor: '#FFE4D6',
    right: -30,
    top: 130,
  },

  headerContainer: {
    marginTop: 10,
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
    marginTop: 50,
  },

  inputBox: {
    marginBottom: 22,
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

  signupButton: {
    backgroundColor: '#FE5A00',
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: 'center',
    marginTop: 12,

    shadowColor: '#FE5A00',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,

    elevation: 8,
  },

  signupText: {
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

  loginText: {
    color: '#FE5A00',
    fontWeight: '700',
    fontSize: 15,
  },
});