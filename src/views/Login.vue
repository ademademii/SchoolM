<template>
      
    <div class="container text-center">
            
            <div class="col align-self-center">
                <section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
              <form @submit.prevent="Login">
              <div class="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" class="form-control form-control-lg" v-model="email"/>
                <label class="form-label" for="typeEmailX">Email</label>
              </div>

              <div class="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" class="form-control form-control-lg" v-model="password"/>
                <label class="form-label" for="typePasswordX">Password</label>
              </div>

              <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>

              <input type="submit" class="btn btn-outline-light btn-lg px-5" value="Login">
             </form>

            </div>


          </div>
        </div>
      </div>
    </div>
  </div>
</section>
            </div>
  
    </div>
</template>

<script>
import {ref} from "vue"
import firebase from "firebase"

export default {
    setup(){
        const email = ref ("")
        const password = ref("")

        const Login = () => {
            firebase
            .auth()
            .signInWithEmailAndPassword(email.value, password.value)
            .then(data => console.log(data))
            .catch(err => alert(err.message))

        }

        return{
            Login,
            email,
            password
        }
    },
    name:'Login',
    mounted()
    {
        let user = localStorage.getItem('user-info');
        if(user){
            this.$router.push({name:Register})
        }
    }
}
</script>

<style>
</style>