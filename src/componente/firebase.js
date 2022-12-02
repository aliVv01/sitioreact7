// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDT4tvzrJ8lcccHiDgUaqWpx7fSG23A-hU',
    authDomain: 'fb-sitioreact4.firebaseapp.com',
    projectId: 'fb-sitioreact4',
    storageBucket: "fb-sitioreact4.appspot.com",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;