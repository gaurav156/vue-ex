<template>
  <div class="bg">
    <div class="LoginCompo">
      <h1>Forgot Password?</h1>
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
        <label v-if="otpSent">
          OTP:
          <input
            type="password"
            placeholder="Enter OTP"
            v-model="form.otp"
            ref="otp"
            class="inputText"
            id="otp"
          /> </label
        ><br />
        <button
          v-if="!otpSent"
          v-on:click="sendOtp"
          type="button"
          class="submitBtn"
        >
          Send OTP
        </button>
        <button
          v-if="otpSent"
          v-on:click="submitOtp"
          type="button"
          class="submitBtn"
        >
          Submit OTP
        </button>
        <router-link :to="'/login'" class="cancelBtn">Cancle</router-link>
        <resetPassword v-show="reset" :userEmail="this.form.email">
        </resetPassword>
        <div v-if="this.errorAlert" class="errorAlertClass">
          <p>{{ errorMsg }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import resetPassword from "./resetPassword.vue";

export default {
  name: "forgotPassword",
  components: { resetPassword },
  data() {
    return {
      otpSent: false,
      form: {
        email: "",
        otp: "",
      },
      user: [],
      error: [],
      errorAlert: false,
      errorMsg: "",
      reset: false,
    };
  },
  methods: {
    async sendOtp() {
      if (this.form.email === "" || this.form.email.length === 0) {
        this.errorMsg = "Error : Enter Email";
        this.errorAlert = true;
        this.otpSent = false;
      } else {
        let result = await axios.get(
          "http://localhost:3000/marklogic/check/" + this.form.email
        );
        if (result.data === true) {
          let response = await axios.get(
            "http://localhost:3000/otp/send/" + this.form.email
          );
          if (response.status === 200) {
            this.errorAlert = false;
            this.otpSent = true;
          } else {
            this.errorMsg = "Error : OTP not sent";
            this.errorAlert = true;
            this.otpSent = false;
          }
        } else {
          this.errorMsg = "Error : Email not Registered";
          this.errorAlert = true;
          this.otpSent = false;
        }
      }
    },
    async submitOtp() {
      let response = await axios.post(
        "http://localhost:3000/otp/verify",
        this.form
      );
      let result = response.data;
      if (result === "verified") {
        this.reset = true;
        // this.$router.push({ name: "login" });
      } else {
        this.errorMsg = "Error : Wrong OTP";
        this.errorAlert = true;
        this.reset = false;
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