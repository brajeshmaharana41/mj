import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BackButton from '../components/BackButton'

import { StatusBar } from 'react-native'
import Myorderheader from '../components/Header/Myorderheader'
const MyOrder = (navigation) => {
    return (
        <> 
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <Myorderheader />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}} >
                <Text> No Orders</Text>
            </View>

        </>
    )
}

export default MyOrder
