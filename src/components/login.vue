<template>
  <div class="LoginCompo">
    <h1>Login</h1>
    <div class="inputDiv">
      <label class="inputClass">
        User Name:
        <input
          type="text"
          placeholder="Enter Username"
          v-model.lazy="form.username"
          ref="username"
          class="inputText"
          id="username"
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          placeholder="Enter Password"
          v-model="form.password"
          ref="password"
          class="inputText"
          id="password"
        /> </label
      ><br />
      <!-- <button v-on:click="getUser(form.username)" type="button">Submit</button> -->
      <!-- <button v-on:click="login(); getUser(form.username)" type="button">Submit</button> -->
      <button v-on:click="login" type="button" class="submitBtn">Submit</button>
      <div v-if="this.errorAlert" class="errorAlertClass">
        <p>{{ errorMsg }}</p>
      </div>
    </div>
    <!-- <bookLib :username="form.username"/> -->
    <!-- <bookLib /> -->
    <!-- <v-if redirect><router-link class="nav-element" to="/">Books</router-link></v-if> -->
    <!-- <bookLib :username= "form.username"/> -->
    <!-- <bookLib v-show="Hidden" :username= "form.username"/> -->
  </div>
</template>

<script>
// import bookLib from './book.vue'

export default {
  name: "loginLib",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      error: [],
      errorAlert: false,
      errorMsg: "",
    };
  },
  // components:{
  //   bookLib,
  // },
  // props: {
  //     // getUser: Function
  //     getUser: String
  // },
  methods: {
    // login(){
    //   // this.$router.push({name:'book'});
    //     this.error=[];
    //     for(const item in this.form){
    //         if(this.form[item]==="" || this.form[item].length===0){
    //             this.error.push(item)
    //         }
    //     }

    //     if(this.error.length==0){
    //         // getUser(form.username);
    //         this.$router.push({name:'book'});
    //         // alert("Welcome ", this.username);
    //     }

    //     console.warn(this.form, this.error)

    // }
    // onClick(){
    //   // this.getUser=this.username,
    //   bookLib.username=this.username;
    //   this.login()
    // },
    login() {
      this.error = [];
      for (const item in this.form) {
        if (this.form[item] === "" || this.form[item].length === 0) {
          this.error.push(item);
          console.warn(item);
        }
      }

      if (this.error.length === 0) {
        localStorage.setItem("user-info", this.form.username);
        this.$router.push({ name: "book" });
        // getUser(this.username);
      } else {
        if (!this.error.includes("password")) {
          this.$refs.username.style.borderColor = "red";
          this.errorMsg = "Error: Enter Username";
          this.errorAlert = true;
          console.log(this.errorAlert);
          // this.$refs.username.innerText = "hi";
          // this.$ref.username.style.backgroundColor = "#66bb6a";
          // this.$ref.username.style.border = "1px solid #66bb6a";
          // alert("please enter username");
        } else if (!this.error.includes("username")) {
          this.$refs.password.style.borderColor = "red";
          // alert("please enter password");
          this.errorMsg = "Error: Enter Password";
          this.errorAlert = true;
        } else if (this.error.includes("username" && "password")) {
          this.$refs.username.style.borderColor = "red";
          this.$refs.password.style.borderColor = "red";
          // alert("please enter username & password");
          this.errorMsg = "Error: Enter Username & Password";
          this.errorAlert = true;
        }
      }
    },
  },
};
</script>

<style scoped>
h1 {
  /* color: rgb(0, 61, 153); */
  /* padding: 10px; */
  text-align: center;
}
p {
  padding: 10px;
}
div {
  padding: 10px;
  margin: 10px;
}
.errorAlertClass {
  background-color: rgb(238, 129, 129);
  padding: 10px;
  margin: 10px;
  width: 200px;
  height: fit-content;
  border-radius: 5px;
  color: rgb(116, 2, 2);
  border: 1px solid rgb(230, 59, 59);
  font-weight: bold;
  font-size: small;
  margin-left: 18px;
}
.errorAlertClass p {
  text-align: center;
}
.LoginCompo {
  display: block;
  padding: 10px;
  margin: auto;
  margin-top:5%;
  width: 302px;
  height: fit-content;
  background-color: rgb(0, 102, 255);
  border-radius: 5px;
  color: white;
  /* -moz-box-shadow: 0 0 3px #ccc;
  -webkit-box-shadow: 0 0 3px #ccc;
  box-shadow: 0 0 3px #ccc; */
}
.submitBtn {
  justify-self: center;
  background-color: white;
  border-color: lightblue;
  border-radius: 5px;
  width: -webkit-fill-available;
  color: rgb(0, 102, 255);
  font-weight: bold;
  padding: 4px;
  font-size: medium;
}
.inputText {
  display: grid;
  width: -webkit-fill-available;
  height: 30px;
  border-radius: 5px;
  border: none;
  padding-left: 20px;
  padding-bottom: 2px;
  margin-top: 5px;
}
.inputClass {
  padding-bottom: 10px;
}
.inputDiv {
  display: grid;
}
.submitBtn:hover {
  background-color: lightblue;
}
</style>