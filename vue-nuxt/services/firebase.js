import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
!firebase.apps.length ? firebase.initializeApp(process.env.BACKEND_KEYS) : ''
export const auth = firebase.auth()
export const db = firebase.database()
export default firebase