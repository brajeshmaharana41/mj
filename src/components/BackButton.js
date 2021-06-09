import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { List, Colors } from 'react-native-paper';


export default function BackButton({ goBack }) {
  return (
    <TouchableOpacity onPress={goBack} style={styles.container}>
      <List.Icon color={Colors.white} icon="arrow-left-thick" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  
})
