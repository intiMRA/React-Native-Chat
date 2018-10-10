import {StyleSheet} from "react-native";
export default StyleSheet.create({
    footerContainer: {
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    footerText: {
        fontSize: 14,
        color: '#aaa',
    },
    buttonContainer: {
        height:40,
        width: 80,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20,
        marginLeft:20,
        borderRadius:30,
    },
    button: {
        backgroundColor: 'rgba(150,150,150,0.7)',
    },
    text: {
        color: 'white',
    }
});