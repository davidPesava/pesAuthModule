import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCQeNHGZbVYAi2ZcXgcxLDGBOi0rF-ApPo",
  authDomain: "pesauth.firebaseapp.com",
  databaseURL: "https://pesauth.firebaseio.com",
  projectId: "pesauth",
  storageBucket: "pesauth.appspot.com",
  messagingSenderId: "767321233486",
  appId: "1:767321233486:web:383d168d58b7c512d50b1f"
}

const app = firebase.initializeApp(firebaseConfig)

export const db = app.database()
