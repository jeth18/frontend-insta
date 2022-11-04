import { initializeApp } from "firebase/app";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const AUTODOMAIN = process.env.NEXT_PUBLIC_AUTODOMAIN;
const PROJECTID = process.env.NEXT_PUBLIC_PROJECTID;
const STORAGE_BUCKET = process.env.NEXT_PUBLIC_STORAGE_BUCKET;
const MESSAGING_SENDER_ID = process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID;
const APP_ID = process.env.NEXT_PUBLIC_APP_ID;
const MEASUREMENT_ID = process.env.NEXT_PUBLIC_MEASU_ID;

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

export default app;
