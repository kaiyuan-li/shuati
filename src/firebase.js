import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDJDm4HEwYIV4AqfUE54xSOFnOCW5yLKFA',
  authDomain: 'shuati.firebaseapp.com',
  projectId: 'shuati',
  storageBucket: 'shuati.appspot.com',
  messagingSenderId: '943492445602',
  appId: '1:943492445602:web:68d9143cccbcdc3bb5aefb',
  measurementId: 'G-M91609STW2'
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

// if (window.location.hostname === 'localhost') {
//   console.log('localhost detected')
//   db.settings({
//     host: 'localhost: 8080',
//     ssl: false
//   })
// }

const problemsCollection = db.collection('problems')

export {
  db,
  problemsCollection
}
