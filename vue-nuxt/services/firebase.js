import * as firebase from 'firebase/app'
import 'firebase/auth'

!firebase.apps.length ? firebase.initializeApp(process.env.BACKEND_KEYS) : ''
export const auth = firebase.auth()
export default firebase