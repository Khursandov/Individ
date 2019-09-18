import * as firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyDH0sOijgW0hxgPVRnpHG0efR_lUx6TCQA",
    authDomain: "individ-f9493.firebaseapp.com",
    databaseURL: "https://individ-f9493.firebaseio.com",
    projectId: "individ-f9493",
    storageBucket: "",
    messagingSenderId: "920927083750",
    appId: "1:920927083750:web:5725db63511330bd006f27"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  export default firebaseApp.firestore()