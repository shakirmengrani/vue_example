import {auth} from '../services/firebase'

export default function({store, route, redirect}){
    route.meta.some(record => {
        console.log("user", store.state.user, auth.currentUser);     
        record.requireAuth === true && store.state.user.currentUser === "" ? redirect("/user/login") : ""        
    });
}