import React from 'react'
import { View, Text, Image } from 'react-native'
import Logo from '../assets/23.jpeg'

const SplashScreen = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={Logo} style={{width: 350, height: 650 }}/>
        </View>
    )
}

export default SplashScreen
