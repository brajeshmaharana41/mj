import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Title from '../components/Title'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { phoneValidator } from '../helpers/phoneValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { LoginAuthUser } from '../core/AuthUser'
import Homeheader from '../components/Header/Homeheader'

export default function LoginScreen({ navigation }) {
  const [phone, setphone] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onLoginPressed = async () => {
    const phoneError = phoneValidator(phone.value)
    const passwordError = passwordValidator(password.value)
    if (phoneError || passwordError) {
      setphone({ ...phone, error: phoneError})
      setPassword({ ...password, error: passwordError })
      return
    }
    let obj = { 
        "mobile": phone.value,
        "password":password.value
    }
    let result = await LoginAuthUser(obj)
    navigation.navigate('MyProfile', {'user':result})
    console.log(result) 
  }

  return (
   <>
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Title>Welcome back.</Title>
      <TextInput
          label = "Phone"
          returnKeyType="next"
          value={phone.value}
          maxLength={10}
          onChangeText={(mobileNumber) => setphone({ value: mobileNumber, error: '' })}
          error={!!phone.error}
          errorText={phone.error}
          keyboardType="numeric"
          />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={onLoginPressed}>
        Login
      </Button>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  </>  
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
