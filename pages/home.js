import React from 'react';
import { Button, View, Text,Image,StyleSheet,TouchableOpacity,ImageBackground,Dimensions } from 'react-native';
import styles from '../styles/pageStyles';
import logOutService from "../services/logOutService";
import bstyles from '../styles/buttonStyles';
import textStyles from'../styles/textStyles';
export class HomeScreen extends React.Component {
    logOut(){
        logOutService.logout().catch();
        this.props.navigation.navigate('Login')
    }
    render() {
        return (


                <ImageBackground source={require('../resources/back.jpeg')}
                       style={styles.backgroundImage}>
                    <View style={styles.titleContainer} left={(Dimensions.get('window').width/2)-16*2}>
                        <Text style={textStyles.titleText}>Home</Text>
                    </View>
                    <View style={bstyles.viewStyle}>
                        <ImageBackground source={require('../resources/halp.png')} style={bstyles.buttonImage1}>
                            <TouchableOpacity style={bstyles.buttonContainer}
                                              onPress={() => this.props.navigation.navigate('Info')}>

                                <Text  style={textStyles.buttontextStyle}>INFO</Text>

                            </TouchableOpacity>
                        </ImageBackground>

                        <ImageBackground source={require('../resources/contacts.png')} style={bstyles.buttonImage2}>
                            <TouchableOpacity style={bstyles.buttonContainer}
                                              onPress={() => this.props.navigation.navigate('Contact')}>

                                <Text  style={textStyles.buttontextStyle}>CONTACTS</Text>

                            </TouchableOpacity>
                        </ImageBackground>


                        <ImageBackground source={require('../resources/mail.png')} style={bstyles.buttonImage3}>
                            <TouchableOpacity style={bstyles.buttonContainer}
                                              onPress={() => this.props.navigation.navigate('Chats')}>

                                <Text  style={textStyles.buttontextStyle}>MESSAGES</Text>

                            </TouchableOpacity>
                        </ImageBackground>
                        <ImageBackground source={require('../resources/logout.png')} style={styles.bottomView}>

                            <TouchableOpacity style={styles.bottomContainer}
                                              onPress={this.logOut.bind(this)}>
                                <Text style={textStyles.redText}>OUT</Text>

                            </TouchableOpacity>

                        </ImageBackground>
                    </View>

                </ImageBackground>
        );
    }
}