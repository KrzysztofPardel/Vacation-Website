// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBB4gf4R7jNBx9o_FxosY25d2GrAI_hrmI',
	authDomain: 'todo-app-d0a8f.firebaseapp.com',
	projectId: 'todo-app-d0a8f',
	storageBucket: 'todo-app-d0a8f.appspot.com',
	messagingSenderId: '332374461246',
	appId: '1:332374461246:web:a58ac0d95ca9cf282b3a6f',
}

const secondaryAppConfig = {
	apiKey: 'AIzaSyAEnRIdUKULN-JU6lDkvrO16jNq1N789Fc',
	authDomain: 'auth-firebase-d32ee.firebaseapp.com',
	projectId: 'auth-firebase-d32ee',
	storageBucket: 'auth-firebase-d32ee.appspot.com',
	messagingSenderId: '277081382641',
	appId: '1:277081382641:web:28669d5425975efb4a9350',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

// Initialize another app with a different config
const secondaryApp = initializeApp(secondaryAppConfig, 'secondary')
export const auth = getAuth(secondaryApp)
