import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import {HomeScreen } from './pages/home'
import { LoginScreen } from "./pages/login";
import {ChatScreen} from "./pages/chats";
import {RegisterScreen} from "./pages/register";
import {AddFriendScreen} from "./pages/addfriend";
import {ContactScreen} from "./pages/contacts";
import {LoadingScreen} from "./pages/loading";
import {InfoScreen} from "./pages/info";
import {MessegeScreen} from "./pages/message";


const RootStack = createSwitchNavigator({
        Login: LoginScreen,
        Home: HomeScreen,
        Chats:ChatScreen,
        Register:RegisterScreen,
        Add:AddFriendScreen,
        Contact:ContactScreen,
        Loading:LoadingScreen,
        Info:InfoScreen,
        Message:{screen:MessegeScreen}
},
    {
      IntialName: 'Login',
    });

export default class App extends React.Component {


    render() {
        console.log("BOIIII");
        return <RootStack />;
    }
}