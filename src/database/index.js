// Firebase App is always required and must be first
var firebase = require('firebase/app')

// Add additional services that you want to use
require('firebase/auth')
require('firebase/database')
require('firebase/firestore')
require('firebase/messaging')
require('firebase/functions')

const config = {
  apiKey: 'AIzaSyBsiwMHBUESOw9nKvr1eYFmSRqDYGhwtzY',
  authDomain: 'tower-app-587d7.firebaseapp.com',
  // databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
  projectId: 'tower-app-587d7',
  // storageBucket: "<BUCKET>.appspot.com",
  // messagingSenderId: "<SENDER_ID>",
}

firebase.initializeApp(config)