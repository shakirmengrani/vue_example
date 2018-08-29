import {http} from '../services/http';
import {auth} from '../services/firebase';

export default {
    methods:{
        sendMail:  function sendMail(data){
            return http.post("mail", data);
        },
        sigin: function sigin(options){
            if(options.provider == "email"){
                auth.signInWithEmailAndPassword(options.email, options.password)
            }
        },

        signout: function signout(){
            auth.signOut()
        }
    },

    head(){
        
        return this.head !== null ? this.head : {}
    }
};