import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCOYZ8LGtJdeoZbO3T5vQZrbwrp6m-dx4U",
  authDomain: "school-92e77.firebaseapp.com",
  projectId: "school-92e77",
  storageBucket: "school-92e77.appspot.com",
  messagingSenderId: "822437123649",
  appId: "1:822437123649:web:d936ed881035c126f998c0",
  measurementId: "G-FKJY0W5WEV"
};

firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')