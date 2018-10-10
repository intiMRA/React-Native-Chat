import React from 'react';
import { Button, View, Text,Image,StyleSheet,TouchableOpacity,ImageBackground,FlatList,ActivityIndicator, Dimensions } from 'react-native';
import firebase from '../fbconfig/fbase';
import styles from '../styles/pageStyles';
import loadFromFbase from '../services/loadFromFbase';
import setInFbase from '../services/setInFbase';
import bstyles from '../styles/buttonStyles';
import textStyles from "../styles/textStyles";
export class ContactScreen extends React.Component {


    constructor() {
        super();
        this.state = {
            contacts: [],
            isLoading: true

        };
    }

    async componentDidMount(){
        this.state.contacts.push({
            id:firebase.auth().currentUser.uid,
            email:"ME",
            name:"ME"
        });
        let path='/users/'+firebase.auth().currentUser.uid+"/friends";
        let ar=await loadFromFbase.loadIdEmail(path);

        this.setState({contacts:ar});
        this.setState({isLoading:false});
    }

   async add(user){
        console.log(user);
        let current=await firebase.auth().currentUser;
        let convoid=current.uid+user.id;
        let alt=user.id+current.uid;
        setInFbase.setChat(current,user,convoid,alt,this.props);

    }

    render() {
        return (
            <ImageBackground source={require('../resources/back.jpeg')}
                             style={styles.backgroundImage}>
                <View style={styles.titleContainer} left={(Dimensions.get('window').width/2)-16*4}>
                    <Text style={textStyles.titleText}>Contacts</Text>
                </View>
                <View style={bstyles.viewStyle}>
                    <ImageBackground source={require('../resources/halp.png')} style={bstyles.buttonImage1}>
                        <TouchableOpacity style={bstyles.buttonContainer}
                                          onPress={() => this.props.navigation.navigate('Info')}>

                            <Text  style={textStyles.buttontextStyle}>INFO</Text>

                        </TouchableOpacity>
                    </ImageBackground>

                    <ImageBackground source={require('../resources/mail.png')} style={bstyles.buttonImage2}>
                        <TouchableOpacity style={bstyles.buttonContainer}
                                          onPress={() => this.props.navigation.navigate('Chats')}>

                            <Text  style={textStyles.buttontextStyle}>MESSAGES</Text>

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
                        data={this.state.contacts}
                        keyExtractor={item=>item.id}
                        extraData={this.state.isLoading}
                        renderItem={({item}) => (
                            <TouchableOpacity style={styles.textContainer}
                                              onPress={this.add.bind(this,item)}>
                                <Text stye={textStyles.textStyle}>{item.name}</Text>
                            </TouchableOpacity>
                        )
                        }/>



                </View>

                    <ImageBackground source={require('../resources/add.png')} style={styles.bottomView}>
                        <TouchableOpacity style={styles.bottomContainer}
                                          onPress={() => this.props.navigation.navigate('Add')}>
                            <Text style={textStyles.textforAdd}>ADD</Text>
                        </TouchableOpacity>
                    </ImageBackground>

            </ImageBackground>
        );
    }


}
