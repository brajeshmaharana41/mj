import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import BackButton from '../components/BackButton'
import { Card, TextInput, Title } from 'react-native-paper'

import { StatusBar } from 'react-native'
import TandCheader from '../components/Header/TandCheader'
const TermsandCondition = (navigation) => {
    return (
        <> 
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <TandCheader />
            <ScrollView>
            <Card style={{
                padding: 10,
                margin: 15
            }}>
                <Title style={{padding:1}}>Terms and Condition</Title>
                <Text
                    style={{padding: 10, color: '#a9a9a9', margin: 10, fontSize: 15}}
                        >I am Mj mart is positive about every aspect of life. There are many things I like to do, to see, and to experience.
                         I like to read, I like to write; I like to think, I like to dream; I like to talk, I like to listen.I like to see the sunrise in the morning, 
                         I like to see the moonlight at night, I like to feel the music flowing on my face, I like to smell the wind coming from the ocean.{"\n"}{"\n"}
                         I like to look at the clouds in the sky with a blank mind, I like to do thought experiment when I cannot sleep in the middle of the night.
                         I like flowers in spring, rain in summer, leaves in autumn, and snow in winter. I like to sleep early, I like to get up late I like to be alone,{"\n"}{"\n"}
                         I like to be surrounded by people. I like country’s peace, I like metropolis’ noise; I like the beautiful west lake in Hangzhou,
                         I like the flat cornfield in Champaign. I like delicious food and comfortable shoes; I like good books and romantic movies. I like the land and the nature,{"\n"}{"\n"}
                         I like people. And, I like to laugh.
                         I like flowers in spring, rain in summer, leaves in autumn, and snow in winter. I like to sleep early, I like to get up late I like to be alone,{"\n"}{"\n"}
                         I like to be surrounded by people. I like country’s peace, I like metropolis’ noise; I like the beautiful west lake in Hangzhou,
                         I like the flat cornfield in Champaign. I like delicious food and comfortable shoes; I like good books and romantic movies. I like the land and the nature,
                         I am Mj mart is positive about every aspect of life. There are many things I like to do, to see, and to experience.
                         I like to read, I like to write; I like to think, I like to dream; I like to talk, I like to listen.I like to see the sunrise in the morning, 
                         I like to see the moonlight at night, I like to feel the music flowing on my face, I like to smell the wind coming from the ocean.{"\n"}{"\n"}
                         I like to look at the clouds in the sky with a blank mind, I like to do thought experiment when I cannot sleep in the middle of the night.
                         I like flowers in spring, rain in summer, leaves in autumn, and snow in winter. I like to sleep early, I like to get up late I like to be alone,{"\n"}{"\n"}
                         I like to be surrounded by people. I like country’s peace, I like metropolis’ noise; I like the beautiful west lake in Hangzhou,
                         I like the flat cornfield in Champaign. I like delicious food and comfortable shoes; I like good books and romantic movies. I like the land and the nature,{"\n"}{"\n"}
                         I like people. And, I like to laugh.
                         I like flowers in spring, rain in summer, leaves in autumn, and snow in winter. I like to sleep early, I like to get up late I like to be alone,{"\n"}{"\n"}
                         I like to be surrounded by people. I like country’s peace, I like metropolis’ noise; I like the beautiful west lake in Hangzhou,
                         I like the flat cornfield in Champaign. I like delicious food and comfortable shoes; I like good books and romantic movies. I like the land and the nature,
                </Text>
            </Card>
        </ScrollView>   

        </>
    )
}

export default TermsandCondition
