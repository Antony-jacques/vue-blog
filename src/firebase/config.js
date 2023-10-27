import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDXWujFZjAtgpSelXt40HeD4ZCvDnD7N-c",
    authDomain: "vue-firebase-course-6d349.firebaseapp.com",
    projectId: "vue-firebase-course-6d349",
    storageBucket: "vue-firebase-course-6d349.appspot.com",
    messagingSenderId: "612428643861",
    appId: "1:612428643861:web:75227d683320d396e9581c"
  };

  // init firebase
  firebase.initializeApp(firebaseConfig)

  // init firestore service
  const projectFirestore = firebase.firestore()

  export { projectFirestore }