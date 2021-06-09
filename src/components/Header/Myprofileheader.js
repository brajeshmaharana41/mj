import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { material } from 'react-native-typography';
import BackButton from '../BackButton'

import { Appbar } from 'react-native-paper';
import { List, Colors } from 'react-native-paper';

const Myprofileheader = () => {
  const navigation = useNavigation();
  return (
    <>
      <Appbar style={styles.header}>
      <BackButton goBack={navigation.goBack} />  
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
        </TouchableOpacity>
        <View
          style={{
            flex: 5,
          }}>
          <Text
            style={{ ...material.headline, fontSize: 20, fontWeight: "bold", color: '#fffaf0' }}>
            My Profile
          </Text>
        </View>

        <TouchableOpacity
          //onPress={() => navigation.navigate('Search')}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <List.Icon color={Colors.white} icon="bell-ring" />
        </TouchableOpacity>
        <TouchableOpacity
          //onPress={() => navigation.navigate('Search')}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <List.Icon color={Colors.white} icon="cart" />
        </TouchableOpacity>
      </Appbar>
    </>
  );
};
export default Myprofileheader;

const styles = StyleSheet.create({
  header: {
    height: 55,
    backgroundColor: '#ff1493',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  }
});
