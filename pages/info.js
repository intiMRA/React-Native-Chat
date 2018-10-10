import React from 'react';
import { Button, View, Text,Image,StyleSheet,TouchableOpacity,ImageBackground,Dimensions } from 'react-native';
import styles from '../styles/pageStyles';
import bstyles from '../styles/buttonStyles';
import logOutService from "../services/logOutService";
import textStyles from "../styles/textStyles";
export class InfoScreen extends React.Component {
    logOut(){
        logOutService.logout().catch();
        this.props.navigation.navigate('Login')
    }
    render() {

        return (


            <ImageBackground source={require('../resources/black.jpg')}
                             style={styles.backgroundImage}>
                <View style={bstyles.viewStyle}>
                    <ImageBackground source={require('../resources/home.png')} style={bstyles.infoImage}>
                        <TouchableOpacity style={bstyles.buttonContainer}
                                          onPress={() => this.props.navigation.navigate('Home')}>

                            <Text  style={textStyles.buttontextStyle}>HOME</Text>

                        </TouchableOpacity>
                    </ImageBackground>


                </View>
                <View style={styles.friendsView}>
                    <Text style={textStyles.infoText}>
                        Welcome to my chat, this is the info page.
                        To add friends go to the contact page and click on the add icon situated on the top left.
                        Once you have friends you can chat with them by clicking on their name in the friends page
                        or in the messages page.
                        There is a log out button on the top of each page and to navigate between pages use
                        the round buttons.
                        HAVE FUN!
                    </Text>
                </View>



                    <ImageBackground source={require('../resources/logout.png')} style={styles.bottomView}>
                        <TouchableOpacity style={styles.bottomContainer}
                                          onPress={this.logOut.bind(this)}>
                            <Text style={textStyles.redText}>OUT</Text>
                        </TouchableOpacity>

                    </ImageBackground>


            </ImageBackground>
        );
    }
}