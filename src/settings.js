import * as firebase from 'firebase'


var firebaseConfig = {
  apiKey: "AIzaSyAJ-QmpFV8FS6jooD8D1CdfbEENTn8NNyw",
    authDomain: "individ-657f1.firebaseapp.com",
    databaseURL: "https://individ-657f1.firebaseio.com",
    projectId: "individ-657f1",
    storageBucket: "individ-657f1.appspot.com",
    messagingSenderId: "504353569477",
    appId: "1:504353569477:web:4d118fbdc96b4338c98eac"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  export default firebaseApp.firestore()