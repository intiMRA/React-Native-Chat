import firebase from "../fbconfig/fbase";
import {Alert} from 'react-native';

class logOutService{

    async logout(){
        await firebase.auth().signOut().catch((error) => {
            });
    }
}
export default new logOutService();