
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAuhBBOOw2FXLuAW0Rqllh4P-LpfFEhDM8",
    authDomain: "my-awesome-library-project.firebaseapp.com",
    projectId: "my-awesome-library-project",
    storageBucket: "my-awesome-library-project.appspot.com",
    messagingSenderId: "979595937538",
    appId: "1:979595937538:web:660b4c064e3a453bcfa41b",
    measurementId: "G-Y4E5HF75MQ"
  };

//connecting my react frontend to the backend

const firebaseApp=firebase.initializeApp(firebaseConfig);

//accessing the database in firestore
const db=firebaseApp.firestore();

//exporting db 
export default db