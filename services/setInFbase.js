import firebase from '../fbconfig/fbase';

class setInFbase{
    async setFriend(currentuserPath,currentuser,friendPath,friend){
        var name=null;
        await firebase.database().ref('users/').once('value').then(usr=>{
            usr.forEach(child=>{
                if(currentuser.uid==child.key) {
                    name = child.val().name;
                }
            });
        });
        name=(name===undefined?currentuser.email:name);
        await firebase.database().ref(currentuserPath).set({id:friend.id
            ,email:friend.email,name:friend.name}).catch();
        await firebase.database().ref(friendPath).set({id:currentuser.uid
            ,email:currentuser.email,name:name}).catch();
    }

    async setChat(current,friend,convoid,alt,props){
        var name=null;
        await firebase.database().ref('users/').once('value').then(usr=>{
            usr.forEach(child=>{
                if(child.key==current.uid) {
                    name = child.val().name;
                }
            });
        });
        name=name===undefined ? current.email : name;
        await firebase.database().ref('/chats').once('value').then(snapshot=> {

                if (snapshot.hasChild(convoid)) {
                    props.navigation.navigate("Message",{id:convoid});
                    return;
                }else if(snapshot.hasChild(alt)){
                    props.navigation.navigate("Message",{id:alt});
                    return;
                }
                firebase.database().ref("/chats").child(convoid).set({
                    id: convoid,
                    title: friend.email + "-" + current.email
                }).catch();
                firebase.database().ref("/userChats").child(friend.id).child(convoid).set({title: name}).catch();
                firebase.database().ref("/userChats").child(current.uid).child(convoid).set({title: friend.name}).catch();

            }
        );
        props.navigation.navigate("Message",{id:convoid});

    }
}
export default new setInFbase();