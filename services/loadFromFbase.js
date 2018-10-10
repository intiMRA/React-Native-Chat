import firebase from '../fbconfig/fbase';
class loadFromFbase{
    async loadIdEmail(path){
        let ar=[];
        await firebase.database().ref(path).once('value').then(snapshot=>{
            snapshot.forEach(child=>{

                ar.push({
                    id: child.key,
                    email:child.val().email,
                    name:child.val().name
                })

            })
        });
        return ar;
    }
    async loadKey(path){
        let ar=[];
        await firebase.database().ref(path).once('value').then(snapshot=>{
            snapshot.forEach(child=>{

                ar.push(child.key)

            })
        });
        return ar;
    }

    async loadChat(path){
        let ar=[];
        await firebase.database().ref(path).once('value').then(snapshot=>{
            snapshot.forEach(child=>{
                ar.push({
                    id: child.key,
                    title:'chat with: '+child.val().title
                })

            })
        });
        return ar;
    }
}
export default new loadFromFbase();