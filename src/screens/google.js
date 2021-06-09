import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin'
GoogleSignin.configure({
    webClientId : '567864048077-1d22b6glqa4nha66flci98cunjirof3i.apps.googleusercontent.com',
    offlineAccess : true
})
export class google extends Component {
    constructor(props){
        super(props);
        this.state={
            userGoogleInfo : {},
            loaded : false
        };
    }
    signIn = async()=>{
        try{
            await GoogleSignin.hasPlayServices()
            const userInfo = await GoogleSignin.signIn();
            this.setState({
                userGoogleInfo : userInfo,
                loaded : true
            })
        }
        catch(error){
            console.log(error.message);
        }
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <GoogleSigninButton 
                onPress={this.signIn}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                style={{width:200, height:50}}
                />
                {this.state.loaded ?
                <View>
                    <Text>{this.state.userGoogleInfo.user.name}</Text>
                    <Text>{this.state.userGoogleInfo.user.email}</Text>
                    <Image
                        style={{width:100, height: 100}}
                        source={{uri: this.state.userGoogleInfo.user.photo}}
                    />
                </View> : <Text>Not signed In</Text>    
                }
            </View>
        )
    }
}

export default google
