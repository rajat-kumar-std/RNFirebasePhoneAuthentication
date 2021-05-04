import React from 'react';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

const firebaseConfig = {
  // firbase config code
  apiKey: 'AIzaSyC8sM3ZGls2kpZn7Wu3oRAoJqo7oKX5bI8',
  authDomain: 'phone-authentication-b0114.firebaseapp.com',
  projectId: 'phone-authentication-b0114',
  storageBucket: 'phone-authentication-b0114.appspot.com',
  messagingSenderId: '442346104781',
  appId: '1:442346104781:web:981b93ad12b904c0d98684',
};

if(firebase.app.length){
    firebase.initializeApp(firebaseConfig);
}

export default () => {
  return {firebase, auth};
};
