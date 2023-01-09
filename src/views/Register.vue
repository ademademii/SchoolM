<template>
    <h1>Create Account</h1>
    <form @submit.prevent="Register">
    <input type="text" placeholder="Email" v-model="email"/> 
    <input type="password" placeholder="Password" v-model="password"/>
    <input type="submit" value="Register">

    </form>
    
</template>

<script>
import firebase from 'firebase';
import { ref } from 'vue';

export default {
    setup(){
        const email = ref("");
        const password = ref ("");

        const Register = () => {
            firebase
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value)
            .then(user => {
                alert(user);
            })
            .catch(err => alert(err.message));
        }
        return{
            Register,
            email,
            password

        }
    }
}


</script>

<style>
</style>