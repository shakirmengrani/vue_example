import {http} from '../services/http';
import {auth} from '../services/firebase';
export default {
    methods:{
        sendMail:  function sendMail(data){
            return http.post("mail", data);
        },
        sigin: function sigin(email, password){
            auth.signInWithEmailAndPassword(email, password).then((user)=>{
                
            })
            // auth.signOut()
        }
    },

    head(){
        return this.head !== null ? this.head : {}
    }
}