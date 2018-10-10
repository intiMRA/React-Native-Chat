import firebase from "../fbconfig/fbase";
import {Alert} from 'react-native';

class loginService{

    async login(email,password,props){
        await firebase.auth().signInWithEmailAndPassword(email,password)
            .then((user) => {
                props.navigation.navigate('Home')
            })
            .catch((error) => {
                Alert.alert(
                    'Login Error',
                    error.message,
                    [
                        {text: 'Cancel', onPress: () => props.navigation.navigate('Login'), style: 'cancel'},
                        {text: 'OK', onPress: () => props.navigation.navigate('Login')},
                    ],
                    { cancelable: false }
                )
            });
    }
}
export default new loginService();