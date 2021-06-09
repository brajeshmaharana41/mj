import React from 'react'
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native'
import BackButton from '../components/BackButton'

import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import { StatusBar } from 'react-native'
import Contactheader from '../components/Header/Contactheader'
import { blue100 } from 'react-native-paper/lib/typescript/styles/colors';
const Contact = (navigation) => {
    return (
        <> 
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <Contactheader />
            <Card style={{
                padding: 10,
                margin: 15
            }}>
                <Card.Content>
                <Title style={{padding:1}}>Address</Title>
                </Card.Content>
                <Text
                    style={{padding: 10, color: '#a9a9a9',marginLeft: 25, fontSize: 15}}
                        >MJ Mart{"\n"}
                        Near RTC Complex,{"\n"}
                        Ambedkar Jn, Palakonda Road,{"\n"}
                        Srikakulam - 532001,{"\n"}
                        Cell : +91-9494449187, +91-9059341219
                </Text>
            </Card>
            <Card style={{
                padding: 10,
                margin: 15
            }}>
                <Card.Content>
                <Title>Send Us an Email on </Title>
                </Card.Content>
                <Text
                    style={{padding: 5, color: '#a9a9a9', marginLeft: 25, fontSize: 18}}
                        >
                        naidutammina@gmail.com
                </Text>
            </Card> 


        </>
    )
}

export default Contact
