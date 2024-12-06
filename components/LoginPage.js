import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Welcome Back!</Text>

      {/* Input Fields */}
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Username/Email"
          placeholderTextColor="#aaa"
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      {/* Sign Up Link */}
      <Text style={styles.signUpText}>
        Don’t have an account? <Text style={styles.signUpLink}>Sign Up</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // White background
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2f7f4e', // Green color
    marginBottom: 30, // Space below the title
  },
  inputWrapper: {
    width: '90%', // Input field container width
    marginBottom: 15, // Space between fields
  },
  input: {
    width: '100%', // Input width
    height: 50, // Input height
    borderRadius: 25, // Rounded edges like the design
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f4f4f4',
    paddingHorizontal: 15, // Internal padding
    fontSize: 14,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginRight: '5%', // Aligns text to the right
    color: '#2f7f4e',
    fontSize: 14,
    marginBottom: 20, // Space between forgot password and button
  },
  button: {
    width: '90%',
    height: 50,
    backgroundColor: '#2f7f4e',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpText: {
    fontSize: 14,
    color: '#555',
  },
  signUpLink: {
    color: '#2f7f4e',
    fontWeight: 'bold',
  },
});

export default LoginPage;
