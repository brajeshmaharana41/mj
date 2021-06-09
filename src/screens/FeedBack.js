import React from 'react'
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native'
import BackButton from '../components/BackButton'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Rating, AirbnbRating } from 'react-native-elements';
import { StatusBar } from 'react-native'
import Feedbackheader from '../components/Header/Feedbackheader'

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const Submit = () =>
    Alert.alert(
      "Feedback Submitted Successfully",
    );

const FeedBack = (navigation) => {
    return (
        <> 
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <Feedbackheader />
            <Card style={{
                padding: 10,
                margin: 15
            }}>
                <Card.Content>
                <Title>Feed Back</Title>
                </Card.Content>
                <TextInput
                
                multiline={true}
                numberOfLines={1}
                //onChangeText={(text) => this.setState({text})}
                //value={this.state.text}
                style={{
                    padding: 10,
                    margin: 15,
                    backgroundColor: "#DDDDDD",
                }}
                />
                <Rating showRating fractions="{3}" startingValue="{3.3}"  style={{ paddingVertical: 10 }}/>
                <Button style={{padding: 10, justifyContent: 'center', alignItems: 'center' }} onPress={Submit}>Submlt</Button>
            </Card> 

        </>
    )
}

export default FeedBack
