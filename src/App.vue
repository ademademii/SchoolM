<script setup>
//import HelloWorld from './components/HelloWorld.vue'
//import TheWelcome from './components/TheWelcome.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import ServerStatus from './components/ServerStatus.vue'
import Main from'./components/main.vue'


</script>

<script>

export default{
  components:{
    'Header':Header,
    'Footer':Footer,
    'app-server-status': ServerStatus,
    'Main':Main
  }
}
</script>

<template>
  <Header/>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <app-server-status/>
    <Main/>
  <Footer/>


  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
/*header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
*/
</style>
