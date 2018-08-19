import firebase from 'firebase'
export default {
    methods: {
        signin: function signin(email, password){
            firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
                console.log(user);
            })
        }
    }
}