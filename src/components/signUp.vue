<template>
  <div class="backdropR">
    <div class="LoginCompo">
      <slot></slot>
      <h1>Sign Up</h1>
      <div class="inputDiv">
        <label class="inputClass">
          Email:
          <!-- <input
            type="text"
            placeholder="Enter Email"
            v-model.lazy="email"
            ref="emailID"
            class="inputText"
            id="emailID"
          /> -->
          <p class="inputText" id="emailFixed">{{ userEmail }}</p>
        </label>
        <label class="inputClass">
          First Name:
          <input
            type="text"
            placeholder="Enter First Name"
            v-model.lazy="form.firstName"
            ref="firstName"
            class="inputText"
            id="firstName"
          />
        </label>
        <label class="inputClass">
          Last Name:
          <input
            type="text"
            placeholder="Enter Last Name"
            v-model="form.lastName"
            ref="lastName"
            class="inputText"
            id="lastName"
          />
        </label>
        <label class="inputClass">
          Password:
          <input
            type="password"
            placeholder="Enter Password"
            v-model="form.password"
            ref="password"
            class="inputText"
            id="password"
          /> </label
        ><label>
          Re-enter Password:
          <input
            type="password"
            placeholder="Re-enter Password"
            v-model="form.reenterPassword"
            ref="reenterPassword"
            class="inputText"
            id="reenterPassword"
          /> </label
        ><br />
        <button v-on:click="signUp" type="button" class="submitBtn">
          Sign Up
        </button>
        <router-link :to="'/login'" class="routerLink"
          >already registered? Login here!</router-link
        >
        <div v-if="this.errorAlert" class="errorAlertClass">
          <p>{{ errorMsg }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "signUpLib",
  props: { userEmail: String },
  data() {
    return {
      form: {
        id: "",
        email: this.userEmail,
        firstName: "",
        lastName: "",
        password: "",
        reenterPassword: "",
      },
      error: [],
      errorAlert: false,
      errorMsg: "",
    };
  },
  methods: {
    async signUp() {
      this.error = [];
      this.$refs.firstName.style.borderColor = "rgb(0, 102, 255)";
      this.$refs.lastName.style.borderColor = "rgb(0, 102, 255)";
      this.$refs.password.style.borderColor = "rgb(0, 102, 255)";
      this.$refs.reenterPassword.style.borderColor = "rgb(0, 102, 255)";

      if (
        (this.form.firstName === "" || this.form.firstName.length === 0) &
        (this.form.lastName === "" || this.form.lastName.length === 0) &
        (this.form.password === "" || this.form.password.length === 0) &
        (this.form.reenterPassword === "" ||
          this.form.reenterPassword.length === 0)
      ) {
        this.error.push("firstName");
        this.error.push("lastName");
        this.error.push("password");
        this.error.push("reenterPassword");
      } else if (
        this.form.firstName === "" ||
        this.form.firstName.length === 0
      ) {
        this.error.push("firstName");
      } else if (this.form.lastName === "" || this.form.lastName.length === 0) {
        this.error.push("lastName");
      } else if (this.form.password === "" || this.form.password.length === 0) {
        this.error.push("password");
      } else if (
        this.form.reenterPassword === "" ||
        this.form.reenterPassword.length === 0
      ) {
        this.error.push("reenterPassword");
      } else {
        if (this.form.password !== this.form.reenterPassword) {
          this.error.push("passNotMatch");
        } else {
          const response = await axios.post(
            "http://localhost:3000/marklogic/users",
            {
              id: this.form.id,
              email: this.userEmail,
              firstName: this.form.firstName,
              lastName: this.form.lastName,
              password: this.form.password,
            }
          );
          if (response.status == 200) {
            this.$router.push({ name: "login" });
          }
        }
      }
      if (this.error.includes("passNotMatch")) {
        this.$refs.password.style.borderColor = "red";
        this.$refs.reenterPassword.style.borderColor = "red";
        this.errorMsg = "Error: Password did not Match";
        this.errorAlert = true;
      } else {
        if (this.error.includes("firstName")) {
          this.$refs.firstName.style.borderColor = "red";
        }
        if (this.error.includes("lastName")) {
          this.$refs.lastName.style.borderColor = "red";
        }
        if (this.error.includes("password")) {
          this.$refs.password.style.borderColor = "red";
        }
        if (this.error.includes("reenterPassword")) {
          this.$refs.reenterPassword.style.borderColor = "red";
        }
        if (this.error.includes("passNotMatch")) {
          this.$refs.password.style.borderColor = "red";
          this.$refs.reenterPassword.style.borderColor = "red";
        }
        this.errorMsg = "Error: Please fill all the fields";
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
  padding-top: 6px;
  padding-bottom: 0px;
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
  margin-top: 1.75%;
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
  padding-bottom: 6px;
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

#emailFixed {
  font-size: 83.502%;
  color: grey;
}
</style>