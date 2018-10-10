import {StyleSheet,Dimensions} from "react-native";
export default StyleSheet.create({

    buttonImage1: {
        opacity: 0.7,
        width: Dimensions.get('window').width / 5,
        height: Dimensions.get('window').width / 5,
        resizeMode: 'cover',
        alignItems: 'baseline',
        left: Dimensions.get('window').width / 10,
        top:Dimensions.get('window').height-Dimensions.get('window').width / 5 -30
    },
    buttonImage2: {
        opacity: 0.7,
        width: Dimensions.get('window').width / 5,
        height: Dimensions.get('window').width / 5,
        resizeMode: 'cover',
        alignItems: 'baseline',
        left: (Dimensions.get('window').width / 10) * 2,
        top:Dimensions.get('window').height-Dimensions.get('window').width / 5 -30

    },
    buttonImage3: {
        opacity: 0.7,
        width:Dimensions.get('window').width / 5,
        height: Dimensions.get('window').width / 5,
        resizeMode: 'cover',
        alignItems: 'baseline',
        left: (Dimensions.get('window').width / 10) * 3,
        top:Dimensions.get('window').height-Dimensions.get('window').width / 5 -30
    },


    buttonContainer: {
        backgroundColor: 'rgba(150,0,150,0.0)',
        width: Dimensions.get('window').width / 5,
        height: Dimensions.get('window').width / 5,
        alignItems: 'center',
        left:0,
        top:0
    },
    viewStyle: {
        flexDirection: 'row'
    },
    infoImage: {
        position:'absolute',
        opacity: 0.7,
        width: Dimensions.get('window').width / 5,
        height: Dimensions.get('window').width / 5,
        resizeMode: 'cover',
        alignItems: 'baseline',
        left: (Dimensions.get('window').width / 2) - Dimensions.get('window').width / 10,
        top:Dimensions.get('window').height-Dimensions.get('window').width / 5 -30

    }

});