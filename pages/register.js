
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button,TouchableOpacity,Alert } from 'react-native';
import registerService from '../services/registerService';
import styles from '../styles/pageStyles';
export class RegisterScreen extends React.Component {
    state = { email: '', password: '', errorMessage: null,name:''}
    handleRegister=()=> {
        this.props.navigation.navigate('Loading');
        registerService.register(this.state.name,this.state.email,this.state.password,this.props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>REGISTER</Text>
                {this.state.errorMessage &&
                <Text style={{ color: 'red' }}>
                    {this.state.errorMessage}
                </Text>}
                <TextInput style={styles.input}
                           placeholder="UserName"
                           autoCapitalize="none"
                           onChangeText={name => this.setState({ name })}
                           value={this.state.name}
                />
                <TextInput style={styles.input}
                           placeholder="Email"
                           autoCapitalize="none"
                           onChangeText={email => this.setState({ email })}
                           value={this.state.email}
                />
                <TextInput style={styles.input}
                           secureTextEntry
                           placeholder="Password"
                           autoCapitalize="none"
                           onChangeText={password => this.setState({ password })}
                           value={this.state.password}
                />
                <TouchableOpacity style={styles.registerContainer}
                                  onPress={this.handleRegister}>
                    <Text  style={styles.register}>REGISTER</Text>
                </TouchableOpacity>
            </View>
        )
    }
}