
import React from 'react'
import { StyleSheet, Text, TextInput, View, Button,TouchableOpacity,Alert } from 'react-native'
import styles from '../styles/logInStyles';
import loginService from "../services/loginService";
export class LoginScreen extends React.Component {
    state = { email: '', password: '', errorMessage: null }

    handleSignUp=()=> {
        this.props.navigation.navigate('Loading');
        loginService.login(this.state.email,this.state.password,this.props);
   }

    render() {
        console.log("DAMMM");
        return (
            <View style={styles.container}>
                <Text>Log In</Text>
                {this.state.errorMessage &&
                <Text style={{ color: 'red' }}>
                    {this.state.errorMessage}
                </Text>}
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
                <TouchableOpacity style={styles.loginContainer}
                                  onPress={this.handleSignUp}>
                    <Text  style={styles.login}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.registerContainer}
                                  onPress={() => this.props.navigation.navigate('Register')}>
                    <Text  style={styles.register}>NEW USER</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
