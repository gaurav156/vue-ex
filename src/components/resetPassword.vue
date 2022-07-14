<template>
  <div class="backdropR">
    <!-- <div class="dialog"> -->
    <div class="LoginCompo">
      <h1>Reset Password</h1>
      <div class="inputDiv">
        <label class="inputClass">
          New Password:
          <input
            type="password"
            placeholder="Enter New Password"
            v-model="form.password"
            ref="password"
            class="inputText"
            id="password"
          />
        </label>
        <label>
          Re-enter New Password:
          <input
            type="password"
            placeholder="Re-enter New Password"
            v-model="form.reenterPassword"
            ref="reenterPassword"
            class="inputText"
            id="reenterPassword"
          /> </label
        ><br />
        <button v-on:click="resetPassword" type="button" class="submitBtn">
          Reset Password
        </button>
        <router-link :to="'/login'" class="cancelBtn">Cancel</router-link>
        <slot></slot>
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
    <!-- </div> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "resetPassword",

  props: {
    userEmail: String,
  },

  data() {
    return {
      form: {
        email: "",
        password: "",
        reenterPassword: "",
      },
      error: [],
      errorAlert: false,
      errorMsg: "",
    };
  },

  methods: {
    async resetPassword() {
      // localStorage.getItem("email", this.form.email);
      this.form.email = this.userEmail;

      if (
        this.form.password === "" ||
        this.form.password.length === 0 ||
        this.form.reenterPassword === "" ||
        this.form.reenterPassword.length === 0
      ) {
        console.log("Error : fields cannot be blank");
        this.errorMsg = "Error : fields cannot be blank";
        this.errorAlert = true;
        this.otpSent = false;
      } else {
        if (this.form.password === this.form.reenterPassword) {
          let response = await axios.post(
            "http://localhost:3000/marklogic/reset/" +
              this.form.email +
              "/" +
              this.form.password
          );
          if (response.status === 200) {
            console.log("Password Changed");
            this.$router.push({ name: "login" });
          } else {
            console.log("Error : Request Failed");
            this.errorMsg = "Error : Request Failed";
            this.errorAlert = true;
          }
        }
        else{
            console.log("Error : Passwords do not match");
        this.errorMsg = "Error : Passwords do not match";
        this.errorAlert = true;
        this.otpSent = false;
        }
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
.backdropR {
  /* background: rgba(0, 0, 0, 0.5); */
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  margin: 0px;

  background-color: rgb(0, 102, 255);
  padding: 0px;
}

.cancelBtn {
  text-align: center;
  text-decoration: none;
  justify-self: center;
  background-color: rgb(230, 59, 59);
  border-color: rgb(219, 34, 34);
  border-radius: 5px;
  width: -webkit-fill-available;
  color: white;
  font-weight: bold;
  padding: 4px;
  font-size: medium;
  cursor: pointer;
  margin-top: 10px;
}
.cancelBtn:hover {
  background-color: rgb(251, 189, 189);
  color: rgb(219, 34, 34);
}
</style>