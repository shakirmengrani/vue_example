import {auth} from '@/services/firebase'
import Cookie from 'js-cookie'

export default context => {
    const {store, route} = context
    return new Promise((resolve, reject) => {
        auth.onAuthStateChanged(user => {
            if(user){
                user.getIdToken(true).then((token) => {
                    store.commit('setUser', token)
                    Cookie.set("__1d4fgh", token)
                    return resolve()
                })
            }
            store.commit('setUser', null)
            Cookie.remove("__1d4fgh")
            return resolve()
        })
    });
}