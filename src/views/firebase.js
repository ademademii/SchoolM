 // Import the functions you need from the SDKs you need
import firebase from 'firebase'
import { ref,onMounted, onUnmounted } from 'vue';
//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";

  const config = {
    apiKey: "AIzaSyCOYZ8LGtJdeoZbO3T5vQZrbwrp6m-dx4U",
    authDomain: "school-92e77.firebaseapp.com",
    projectId: "school-92e77",
    storageBucket: "school-92e77.appspot.com",
    messagingSenderId: "822437123649",
    appId: "1:822437123649:web:d936ed881035c126f998c0",
    measurementId: "G-FKJY0W5WEV"
  };

  const firebaseApp = firebase.initializeApp(config)
  // Initialize Firebase
  const db = firebaseApp.firestore()
  const usersCollection = db.collection('users')

  export const createUser = user => {
    return usersCollection.add(user)
  }

  export const getUser = async id => {
    const user = await usersCollection.doc(id).get()
    return user.exists ? user.data() : null
  }

  export const updateUser = (id,user) => {
    return usersCollection.doc(id).update(user)
  }

  export const deleteUser = id => {
    return usersCollection.doc(id).delete()
  }

  export const useLoadUsers = () => {
    const users = ref([])
    const close = usersCollection.onSnapshot(snapshot => {
        users.value = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
    })
    onUnmounted(close)
    return users
  }