import {auth} from '@/services/firebase'

export default context => {
    const {store, route} = context
    return new Promise((resolve, reject) => {
        auth.onAuthStateChanged(user => {
            if(user){
                user.getIdToken(true).then((token) => {
                    // console.log("cookie", route.path, store.state.user, user)
                    return resolve(store.commit('user/setUser', token))
                })
            }
            return resolve(store.commit('user/setUser', ""))
        })
    });
}