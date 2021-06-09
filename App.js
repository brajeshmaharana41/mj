import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import screens
import StartScreen from './src/screens/StartScreen';
import LoginScreen from './src/screens/LoginScreen';
import otp from './src/screens/otp';
import verifyotp from './src/screens/verifyotp'
import RegisterScreen from './src/screens/RegisterScreen';
import ResetPasswordScreen from './src/screens/ResetPasswordScreen';
import Dashboard from './src/screens/Dashboard';
import Home from './src/screens/Home';
import MyProfile from './src/screens/MyProfile';
import MyOrder from './src/screens/MyOrder';
import Myaddress from './src/screens/Myaddress';
import FeedBack from './src/screens/FeedBack';
import Contact from './src/screens/Contact';
import About from './src/screens/About';
import TermsandCondition from './src/screens/TermsandCondition';
import google from './src/screens/google'
import SplashScreen from './src/screens/SplashScreen'
import {DrawerContent} from './src/Drawer/DrawerContent';
import {Transition} from 'react-native-reanimated';

const Drawer = createDrawerNavigator();
const MainStack = createStackNavigator();
const SplashStack = createStackNavigator()

const SplashStackNavigator = ({ navigation }) => (
  <SplashStack.Navigator screenOptions={{ headerShown: false }}>
      <SplashStack.Screen name="Splash" component={SplashScreen} />
  </SplashStack.Navigator>
)

const MainPageNavigator = () => {
  return (
      <MainStack.Navigator
        initialRouteName="StartScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <MainStack.Screen name="StartScreen" component={StartScreen} />
        <MainStack.Screen name="LoginScreen" component={LoginScreen} />
        <MainStack.Screen name="otp" component={otp} />
        <MainStack.Screen name="verifyotp" component={verifyotp} />
        <MainStack.Screen name="RegisterScreen" component={RegisterScreen} />
        <MainStack.Screen name="Dashboard" component={Dashboard} />
        
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen name="MyProfile" component={MyProfile} />
        <MainStack.Screen name="MyOrder" component={MyOrder} />
        <MainStack.Screen name="Myaddress" component={Myaddress} />
        <MainStack.Screen name="FeedBack" component={FeedBack} />
        <MainStack.Screen name="Contact" component={Contact} />
        <MainStack.Screen name="google" component={google} />
        <MainStack.Screen name="About" component={About} />
        <MainStack.Screen name="TermsandCondition" component={TermsandCondition} />
        <MainStack.Screen
          name="ResetPasswordScreen"
          component={ResetPasswordScreen}
        />
      </MainStack.Navigator>
  );
};

export default function App() {
  const [initRender, SetInitRender] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  // useEffect(() => {
  //   SplashScreen.hide();
  //   SetInitRender(false);
  // }, [initRender]);
  useEffect(() => {
    setTimeout(() => {
      SetInitRender(false)
    }, 1500)
}, [])
    return (
    <NavigationContainer>
      {initRender ? <SplashStackNavigator /> : <Drawer.Navigator
        initialRouteName="MainPageNavigator"
        drawerContent={props => <DrawerContent {...props} />}
        // eslint-disable-next-line react-native/no-inline-styles
        drawerStyle={{width: initRender ? null : '70%'}}>
        <Drawer.Screen name="MainPageNavigator" component={MainPageNavigator} />
      </Drawer.Navigator>}
      
    </NavigationContainer>
  );
}