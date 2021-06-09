import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Title from '../components/Title'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import Header from '../components/Header'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import { phoneValidator } from '../helpers/phoneValidator'
import { AuthenticateUser } from '../core/AuthUser';
 
export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [phone, setphone] = useState({ value: '', error: '' })
  
  const onSignUpPressed = async () => {
    const nameError = nameValidator(name.value)
    const emailError = emailValidator(email.value)
    const phoneError = phoneValidator(phone.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError })
      setEmail({ ...email, error: emailError })
      setphone({ ...phone, error: phoneError})
      setPassword({ ...password, error: passwordError })
      return
    }
    let obj = {
      "mobile":phone.value,
      "email":email.value,
      "name":name.value,
      "imei":"123654789654789",
      "area":"vizag",
      "password":password.value,
      "landmark":"statue"
    }
    let result = await AuthenticateUser(obj)
    if (console.log(result,obj,'AuthenticateUser')){
      alert('Something went wrong')
    }else{
      alert('Your Registration is successfull')
      navigation.reset({
        index: 0,
        routes: [{ name: 'LoginScreen' }],
      })
    }
  }

  return (
    <>
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Title>Create Account</Title>
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
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
        maxLength={10}

      />
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  </>  
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
