import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDYHjlG0uFDl-e-Cauc-tPqUOwVzYijK-o",
  authDomain: "native-sample-68693.firebaseapp.com",
  databaseURL: "https://native-sample-68693.firebaseio.com",
  projectId: "native-sample-68693",
  storageBucket: "native-sample-68693.appspot.com",
  messagingSenderId: "151979448966"
};

const firebaseInit = () => {
  firebase.initializeApp(config);
};

export default firebaseInit;
