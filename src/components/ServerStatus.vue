<template>
    <div>
        <p v-bind:class="{active: isActive}" v-if="currentState">Normal</p>
        <p v-bind:class="{critical: isCritical}" v-if="!currentState">Critical</p>
        <button @click="changeStatus">Ndrro Statusin</button>
</div>
</template>

<script>
export default({
    data:function(){
        return{
            currentState:true,
            isCritical:true,
            isActive:true
        }
            
    },methods:{
        changeStatus(){
            this.currentState = !this.currentState
        }
    }
})
</script>

<style scoped>
.active{
    color: green;

}
.critical{
    color: red;
}
</style>