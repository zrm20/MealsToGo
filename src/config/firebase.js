import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDacjngR5bpZwKxzL4HOW_tF1pN2tMgcqI",
  authDomain: "mealstogo-49a17.firebaseapp.com",
  projectId: "mealstogo-49a17",
  storageBucket: "mealstogo-49a17.appspot.com",
  messagingSenderId: "200875128564",
  appId: "1:200875128564:web:df19245d5770b6fd9f50a1"
};

export function init() {
  const app = initializeApp(firebaseConfig);
};