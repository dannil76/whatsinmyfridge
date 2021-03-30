import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: 'AIzaSyB89B2otwWxJHaeTIeUy_ifqTEfdj7Y-qY',
  authDomain: 'whatsinmykitchen76.firebaseapp.com',
  databaseURL: 'https://whatsinmykitchen76.firebaseio.com',
  projectId: 'whatsinmykitchen76',
});

export default firebase;
