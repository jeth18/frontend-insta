import { initializeApp } from "firebase/app";
const API_KEY = import.meta.env.VITE_API_KEY;
const AUTODOMAIN = import.meta.env.VITE_AUTODOMAIN;
const PROJECTID = import.meta.env.VITE_PROJECTID;
const STORAGE_BUCKET = import.meta.env.VITE_STORAGE_BUCKET;
const MESSAGING_SENDER_ID = import.meta.env.VITE_MESSAGING_SENDER_ID;
const APP_ID = import.meta.env.VITE_APP_ID;
const MEASUREMENT_ID = import.meta.env.VITE_MEASU_ID;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTODOMAIN,
  projectId: PROJECTID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

export { app };
