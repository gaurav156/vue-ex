<template>
  <div class="bg">
    <div class="LoginCompo">
      <h1>Login</h1>
      <div class="inputDiv">
        <label class="inputClass">
          Email:
          <input
            type="text"
            placeholder="Enter Email"
            v-model="form.email"
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
        <button v-on:click="login" type="button" class="submitBtn">
          Login
        </button>
        <router-link :to="'/signup'" class="routerLink">click here to Register!</router-link>
        <router-link :to="'/forgotpassword'" class="routerLink">forgot Password? click here to reset!</router-link>
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
  </div>
</template>

<script>
import axioInvocation from "./axioInvocation";

export default {
  name: "loginLib",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      user: [],
      error: [],
      errorAlert: false,
      errorMsg: "",
    };
  },
  methods: {
    async login() {
      this.error = [];
      this.$refs.username.style.borderColor = "rgb(0, 102, 255)";
      this.$refs.password.style.borderColor = "rgb(0, 102, 255)";

      if (
        (this.form.email === "" || this.form.email.length === 0) &
        (this.form.password === "" || this.form.password.length === 0)
      ) {
        this.error.push("email");
        this.error.push("password");
      } else if (this.form.email === "" || this.form.email.length === 0) {
        this.error.push("email");
      } else if (this.form.password === "" || this.form.password.length === 0) {
        this.error.push("password");
      } else {
        let response = await axioInvocation.methods.axiosInvoc(
          "http://localhost:3000/marklogic/users/" +
            this.form.email +
            "/" +
            this.form.password
        );
        this.user = response;
      }

      if (
        (this.form.email !== this.user.email) &
        (this.form.password !== this.user.password)
      ) {
        this.error.push("invalidEmail");
        this.error.push("invalidPassword");
      } else if (this.form.email !== this.user.email) {
        this.error.push("invalidEmail");
      } else if (this.form.password !== this.user.password) {
        this.error.push("invalidPassword");
      }

      if (this.error.length === 0) {
        localStorage.setItem("user-info", this.user.firstName);
        this.$router.push({ name: "book" });
      } else if (
        this.error.includes("email") & this.error.includes("password")
      ) {
        this.$refs.username.style.borderColor = "red";
        this.$refs.password.style.borderColor = "red";
        this.errorMsg = "Error: Enter Email & Password";
        this.errorAlert = true;
      } else if (this.error.includes("email")) {
        this.$refs.username.style.borderColor = "red";
        this.errorMsg = "Error: Enter Email";
        this.errorAlert = true;
      } else if (this.error.includes("password")) {
        this.$refs.password.style.borderColor = "red";
        this.errorMsg = "Error: Enter Password";
        this.errorAlert = true;
      } else if (
        this.error.includes("invalidEmail") ||
        this.error.includes("invalidPassword")
      ) {
        this.$refs.username.style.borderColor = "red";
        this.$refs.password.style.borderColor = "red";
        this.errorMsg = "Error: Invalid Email or Password";
        this.errorAlert = true;
      }
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  color: rgb(0, 102, 255);
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
  margin-top: 5%;
  width: 302px;
  height: fit-content;
  background-color: white;
  border-radius: 5px;
  color: rgb(0, 102, 255);
  box-shadow: 0 0 15px rgb(14, 14, 14);
}
.submitBtn {
  justify-self: center;
  background-color: rgb(0, 102, 255);
  border-color: lightblue;
  border-radius: 5px;
  width: -webkit-fill-available;
  color: white;
  font-weight: bold;
  padding: 4px;
  font-size: medium;
  cursor: pointer;
}
.inputText {
  display: grid;
  width: -webkit-fill-available;
  height: 30px;
  border-radius: 5px;
  border: 1px solid rgb(0, 102, 255);
  padding-left: 20px;
  padding-bottom: 2px;
  margin-top: 5px;
}
.inputClass {
  padding-bottom: 10px;
}
.inputDiv {
  display: grid;
  margin-top: 0px;
  padding-top: 10px;
}
.submitBtn:hover {
  background-color: lightblue;
  color: rgb(0, 102, 255);
}
.bg {
  width: 100%;
  height: 100%;
  background-color: rgb(0, 102, 255);
  padding: 0px;
  margin: 0px;
  position: fixed;
}
.routerLink {
  font-size: 15px;
  text-align: center;
  padding-top: 6px;
  color: rgb(0, 102, 255);
}
</style>