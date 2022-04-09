<template>
  <div>
    <p v-if="username">Hi {{username}}, Welcome!</p>
    <h1>Books</h1>
    <p>List of Books coming Soon...</p>
  </div>
  <!-- <loginLib :getUser="getUserName"/> -->
  <!-- <loginLib :getUser="username"/> -->
  <!-- <loginLib /> -->
</template>

<script>
// import loginLib from './login.vue'

export default {
  name: 'bookLib',
  // components: {
  //   loginLib,
  // },
  data(){
    return{
      username: localStorage.getItem('user-info'),
      // welcomeMsg: false,
    }
  },
  // props:{
  //   username: String
  // }
  // methods:{
  //   getUserName(name){
  //     this.username=name;
  //     this.welcomeMsg=true;
  //   },
  // }
}
</script>

<style scoped>
  h1{
    color: rgb(0, 61, 153);
    padding: 10px;
  }
  p{
    padding: 10px;
  }
  div {
  padding: 10px;
  margin: 10px;
}
</style>