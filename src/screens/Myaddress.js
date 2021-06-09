import React from 'react'
import { View, Text } from 'react-native'
import BackButton from '../components/BackButton'

import { StatusBar } from 'react-native'
import Myaddressheader from '../components/Header/Myaddressheader'
const Myaddress = (navigation) => {
    return (
        <> 
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <Myaddressheader />
        </>
    )
}

export default Myaddress
