import React from 'react';
import { Button, View, Text,Image,StyleSheet,TouchableOpacity,ImageBackground,FlatList,Dimensions } from 'react-native';
import firebase from '../fbconfig/fbase'
import styles from '../styles/pageStyles';
import loadFromFbase from '../services/loadFromFbase';
import setInFbase from '../services/setInFbase';
import logOutService from '../services/logOutService';
import bstyles from '../styles/buttonStyles';
import textStyles from '../styles/textStyles';
export class AddFriendScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            contacts: [],
            isLoading: true

        };
    }

   async componentDidMount(){
       let current=firebase.auth().currentUser.uid;
        let path='/users/'+firebase.auth().currentUser.uid+"/friends";
        let friends=await loadFromFbase.loadKey(path);
        let ar=await loadFromFbase.loadIdEmail('/users');

        for(let i=0;i<ar.length;i++){
            if(current!=ar[i].id && !friends.includes(ar[i].id)) {
                this.state.contacts.push({
                    id: ar[i].id,
                    email: ar[i].email,
                    name:ar[i].name
                })
            }
        }
        this.setState({isLoading:false});
    }

    async add(user){
        let current=firebase.auth().currentUser;
        let friendPath='users/' + user.id +'/friends/'+ firebase.auth().currentUser.uid;
        let currentPath='users/' + firebase.auth().currentUser.uid+'/friends/'+user.id;
        await setInFbase.setFriend(currentPath,current,friendPath,user);
        let copy=[];
        for(let i=0;i<this.state.contacts.length;i++){
            var element=this.state.contacts[i];
            if(element.id!=user.id){
                copy.push(element);
            }
        }
        this.setState({contacts:copy});
        this.setState({isLoading:true});
    }
    logOut(){
        logOutService.logout().catch();
        this.props.navigation.navigate('Login')
    }


    render() {
        return (


            <ImageBackground source={require('../resources/back.jpeg')}
                             style={styles.backgroundImage}>
                <View style={styles.titleContainer} left={(Dimensions.get('window').width/2)-16*5}>
                    <Text style={textStyles.titleText}>Add Friend</Text>
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
                        data={this.state.contacts}
                        extraData={this.state.isLoading}
                        keyExtractor={item=>item.id}
                        renderItem={({item}) => (
                            <TouchableOpacity style={styles.textContainer}
                            onPress={this.add.bind(this,item)}>
                            <Text stye={textStyles.textStyle}>{item.name}</Text>
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
