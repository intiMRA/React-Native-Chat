import React from 'react';
import { Button, View, Text,Image,StyleSheet,TouchableOpacity,ImageBackground,FlatList,Dimensions } from 'react-native';
import styles from '../styles/pageStyles';
import firebase from "../fbconfig/fbase";
import loadFromFbase from '../services/loadFromFbase';
import logOutService from "../services/logOutService";
import bstyles from '../styles/buttonStyles';
import textStyles from '../styles/textStyles';
export class ChatScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            chats: [],
            isLoading: true

        };
    }

    async componentDidMount(){
        let current=await firebase.auth().currentUser.uid;
        let path="/userChats/"+current;
        let ar=await loadFromFbase.loadChat(path);
        this.setState({chats:ar});
        this.setState({isLoading:false});
    }

    pushConvo(chat){
        this.props.navigation.navigate("Message",{id:chat.id});
    }
    logOut(){
        logOutService.logout().catch();
        this.props.navigation.navigate('Login')
    }
    render() {

        return (


            <ImageBackground source={require('../resources/back.jpeg')}
                             style={styles.backgroundImage}>
                <View style={styles.titleContainer} left={(Dimensions.get('window').width/2)-16*4}>
                    <Text style={textStyles.titleText}>Messages</Text>
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

                    <ImageBackground source={require('../resources/home.png')} style={bstyles.buttonImage3}>
                        <TouchableOpacity style={bstyles.buttonContainer}
                                          onPress={() => this.props.navigation.navigate('Home')}>

                            <Text  style={textStyles.buttontextStyle}>HOME</Text>

                        </TouchableOpacity>
                    </ImageBackground>

                </View>
                <View style={styles.friendsView}>

                    <FlatList
                        data={this.state.chats}
                        extraData={this.state.isLoading}
                        keyExtractor={item=>item.id}
                        renderItem={({item}) => (
                            <TouchableOpacity style={styles.textContainer}
                                              onPress={this.pushConvo.bind(this,item)}>
                                <Text stye={textStyles.textStyle}>{item.title}</Text>
                            </TouchableOpacity>
                        )
                        }/>



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