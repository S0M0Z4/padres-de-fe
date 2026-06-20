import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

import {
  getDatabase,
  ref,
  set,
  get,
  push,
  update,
  onValue,
  remove
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyD-t_3lJgDO2IMqZSbRaeEe83lk8mbarc0",
  authDomain: "padres-de-fe.firebaseapp.com",
  databaseURL: "https://padres-de-fe-default-rtdb.firebaseio.com",
  projectId: "padres-de-fe",
  storageBucket: "padres-de-fe.firebasestorage.app",
  messagingSenderId: "231791992804",
  appId: "1:231791992804:web:483c5dff099e10829f71f1",
  measurementId: "G-47PB6QFMKE"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export { ref, set, get, push, update, onValue, remove };
