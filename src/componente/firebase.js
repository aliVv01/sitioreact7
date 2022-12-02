// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDT4tvzrJ8lcccHiDgUaqWpx7fSG23A-hU',
    authDomain: 'fb-sitioreact4-3a320.firebaseapp.com',
    projectId: 'fb-sitioreact4-3a320',
    storageBucket: "fb-sitioreact4-3a320.appspot.com",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;