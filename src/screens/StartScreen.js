import React from 'react'
import Background from '../components/Background'
import Title from '../components/Title'
import Button from '../components/Button'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import { StatusBar, View, StyleSheet } from 'react-native'
import { List, Colors } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler'



export default function StartScreen({ navigation }) {


  return (
  <>
  <StatusBar backgroundColor="#fff" barStyle="dark-content" />
    <Background>
      <Title>Login Template</Title>
      <Paragraph>
        The easiest way to start with your amazing application.
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('otp')}
      >
        Login OTP
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
     <View style={styles.icon}> 
        <TouchableOpacity
          onPress={() => navigation.navigate('google')}>
            <List.Icon color={Colors.black} icon="google" />
        </TouchableOpacity>
        <TouchableOpacity>
            <List.Icon color={Colors.black} icon="facebook" />
        </TouchableOpacity>
      </View>
    </Background>
  </>  
  )
}
const styles = StyleSheet.create({  
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  }
});