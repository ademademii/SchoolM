<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <a href="/"><h2>Logo</h2></a>
            </div>
            <div class="col">
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                       
                        <div class="navbar-nav">
                            <router-link to="/register">Register</router-link>
                            <router-link to="/">Home</router-link> &nbsp; 
                            <router-link to="/about">About</router-link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    <component :is="currentView" />
</template>

<script>



</script>

<style scoped>
h2{
    color: green;
}
</style>