import {StyleSheet,Dimensions} from "react-native";
export default StyleSheet.create({

    textStyle:{
        color: '#0f0',
        textAlign: 'center',
        fontWeight: '700',
    },
    infoText:{
        color: '#fff',
        fontWeight: '700',
        fontSize:16
    },
    textforAdd:{
        color: '#0f0',
        textAlign: 'center',
        fontWeight: '700',
        left:10
    },

    redText:{
        color: '#f00',
        fontWeight: '700',
        left:20
    },
    buttontextStyle:{
        top:Dimensions.get('window').width / 40,
        color: '#0f0',
        textAlign: 'center',
        fontSize:Dimensions.get('window').width/40
    },
    titleText:{
        color: '#222',
        textAlign: 'center',
        fontSize:24,
        fontWeight: 'bold'
    }
});