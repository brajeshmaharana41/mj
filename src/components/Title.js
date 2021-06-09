import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../core/theme'
import Logo from '../components/Logo'

export default function Title(props) {
  return (
    <>
    <Logo />
    <Text style={styles.header} {...props} />
   </> 
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 21,
    color: theme.colors.primary,
    fontWeight: 'bold',
    paddingVertical: 8,
  },
})
