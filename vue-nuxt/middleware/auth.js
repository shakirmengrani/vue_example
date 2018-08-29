import {auth} from '../services/firebase'

export default function({store, route, redirect}){
    route.meta.some(record => {
        record.requireAuth === true && !store.state.currentUser ? redirect("/user/login") : ""        
    });
}