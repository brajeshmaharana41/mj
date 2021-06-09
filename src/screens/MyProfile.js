import React from 'react'
import { View, Text } from 'react-native'
import BackButton from '../components/BackButton'
import Button from '../components/Button'
import { StatusBar } from 'react-native'
import Myprofileheader from '../components/Header/Myprofileheader'
import TextInput from '../components/TextInput'
import Background from '../components/Background'
import Title from '../components/Title'

import { black } from 'react-native-paper/lib/typescript/styles/colors'

const MyProfile = (props) => {

    console.log(props.route.params.user.user)
    return (
        <> 
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
                <Myprofileheader />
                  <Background>
                    <Title>My Profile Details</Title>
                      <TextInput >{props.route.params.user.user.name}</TextInput>
                      <TextInput >{props.route.params.user.user.email}</TextInput>
                      <TextInput >{props.route.params.user.user.mobile}</TextInput>
                      <TextInput >{props.route.params.user.user.area}</TextInput>
                  </Background>      
        </>
    )
}

export default MyProfile
