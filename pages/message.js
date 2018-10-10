import React from 'react';
import { GiftedChat,SystemMessage, Bubble} from 'react-native-gifted-chat';
import {View,Platform,StyleSheet,Text,TouchableOpacity} from "react-native";
import backEnd from "../backend/chatBackEnd";
import styles from '../styles/messageStyles';
export class MessegeScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            messages: []
        };
        this.renderBubble = this.renderBubble.bind(this);
        this.renderSystemMessage = this.renderSystemMessage.bind(this);
    }
    componentDidMount(){
        const id=this.props.navigation.getParam('id',null);
        backEnd.load(id,(message)=>{
            this.setState((previousState)=>{
                return {
                    messages:GiftedChat.append(previousState.messages,message)
                }
            })
        });
    }
    componentWillUnmount(){
        backEnd.closeChat();
    }
    renderBubble(props) {
        return (
            <View>
                <Text style={styles.name}>{props.currentMessage.user.name}</Text>
                <Bubble
                    {...props}
                />
            </View>
        );
    }

    renderSystemMessage(props) {
        return (
            <SystemMessage
                {...props}
                containerStyle={{
                    marginBottom: 15,
                }}
                textStyle={{
                    fontSize: 14,
                }}
            />
        );
    }


    render() {
        return (
            <View style={{flex:1}}>
                <TouchableOpacity style={[styles.buttonContainer, styles.button]} onPress={() => this.props.navigation.navigate('Home')}>
                   <Text>BACK</Text>
                </TouchableOpacity>
                <GiftedChat
                    messages={this.state.messages}
                    onSend={(message) => {
                        backEnd.send(message);
                    }}
                    user={{
                        _id: backEnd.getId(),
                        name: backEnd.getName(),
                        avatar: backEnd.getAvatar(),
                    }}
                    renderBubble={this.renderBubble}
                    renderSystemMessage={this.renderSystemMessage}
                />
            </View>

        );
    }


}
