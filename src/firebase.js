// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBFxjbUz7Do98SBiG0QWiNwyoAIuhlKFSQ',
  authDomain: 'faey-birthday-reminder.firebaseapp.com',
  projectId: 'faey-birthday-reminder',
  storageBucket: 'faey-birthday-reminder.firebasestorage.app',
  messagingSenderId: '631353888571',
  appId: '1:631353888571:web:70dc44372eddebc661b11e',
  measurementId: 'G-DQBHKCSTNZ',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

// Initialize Firestore
const db = getFirestore(app)

// Export Firestore instance to be used in other parts of the app
export { db }
