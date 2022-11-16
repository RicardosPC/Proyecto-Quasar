import { boot } from 'quasar/wrappers'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: 'AIzaSyDftWNp8KlXW5RH5IX6U3Ns-NC2U29yQxs',
  authDomain: 'cellphoneebay-2af2d.firebaseapp.com',
  projectId: 'cellphoneebay-2af2d',
  storageBucket: 'cellphoneebay-2af2d.appspot.com',
  messagingSenderId: '274797383550',
  appId: '1:274797383550:web:02adc82b51c1990e2fed2f'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)

export default { db, boot }
