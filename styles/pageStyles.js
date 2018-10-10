import {StyleSheet,Dimensions} from "react-native";
export default StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    buttonImage: {
        opacity:0.7,
        flex:1,
        width: 110,
        height: 110,
        resizeMode:'cover',
        alignItems:'baseline',
    },
    buttonContainer:{
        backgroundColor: 'rgba(150,0,150,0.0)',
        paddingVertical: 15,
        marginBottom:10,
        width:110,
        height:110,
        alignItems:'center',
    },
    textContainer:{
        backgroundColor: 'rgba(0,255,0,0.7)',
        marginBottom:2,
        resizeMode:'cover',
        width:Dimensions.get('window').width/2,
        height:30,
        alignItems:'center',
    },
    friendsView: {
        flex:1,
        position: 'absolute',
        top:Dimensions.get('window').height/5,
        left:Dimensions.get('window').width/4,
        alignItems:'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height:Dimensions.get('window').height/5*3,
        width:Dimensions.get('window').width/2
    },
    bottomView:{
        opacity:0.7,
        flex:1,
        width: 50,
        height: 50,
        resizeMode:'cover',
        alignItems:'baseline',
        justifyContent: 'center',
        position: 'absolute',
        top: 10,
        left:10

    },container: {
        padding: 20
    },
    bottomContainer:{
        opacity:0.7,
        flex:1,
        width: 50,
        height: 50,
        resizeMode:'cover',
        alignItems:'baseline',
        justifyContent: 'center',
        position: 'absolute',
        bottom:0,
        left:0
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#000'
    },
    registerContainer:{
        backgroundColor: '#49E20E',
        paddingVertical: 15,
        marginBottom:10
    },
    register:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
    },
    titleContainer: {
        position:'absolute',
        top:20,
        textAlign:'center'
    }
});