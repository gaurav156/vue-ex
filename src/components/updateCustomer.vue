<template>
  <headerLib />
  <div class="formCompo">
    <h2>Update Customer</h2>
    <hr />
    <div class="inputDiv">
      <label for="customerID" class="label"
        >Book ID :
        <input
          class="inputText"
          type="text"
          name="customerID"
          placeholder="Customer ID"
          v-model="customers.customerID"
        />
      </label>

      <label for="customerName" class="label"
        >Book Title :
        <input
          class="inputText"
          type="text"
          name="customerName"
          placeholder="Customer Name"
          v-model="customers.customerName"
        />
      </label>

      <label for="membershipDate" class="label"
        >Issn No. :
        <input
          class="inputText"
          type="text"
          name="membershipDate"
          placeholder="Membership Date"
          v-model="customers.membershipDate"
        />
      </label>

      <span class="label"
        >Customers :
        <label
          :for="item.bookID"
          v-for="item in bookData"
          :key="item"
          class="inputLabel"
        >
          <input
            type="checkbox"
            :id="item.bookID"
            name="bookID"
            :value="item.bookID"
            v-model="bookList"
            class="checkbox"
          />{{ item.bookID + " - " + item.bookTitle }}</label
        >
      </span>

      <button type="button" @click.prevent="updateCustomer" class="submitBtn">
        Update
      </button>
      <router-link to="/customer" class="cancelBtn"> Cancel </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import headerLib from "./header.vue";
import axiosInvocation from "./axioInvocation.js";

export default {
  name: "updateCustomer",
  components: {
    headerLib,
  },
  data() {
    return {
      customers: {
        customerID: "",
        customerName: "",
        membershipDate: "",
        bookID: [],
      },
      bookList: [],
      bookData: [],
    };
  },
  methods: {
    async updateCustomer() {
      const result = await axios.put("http://localhost:3000/marklogic/customers", {
        customerID: this.customers.customerID,
        customerName: this.customers.customerName,
        membershipDate: this.customers.membershipDate,
        bookID: this.bookList,
      });
      if (result.status == 200) {
        this.$router.push({ name: "customer" });
      }
    },
  },
  async mounted() {
    let username = localStorage.getItem("user-info");
    if (!username) {
      this.$router.push({ name: "login" });
    }

    let result = await axiosInvocation.methods.axiosInvoc(
      "http://localhost:3000/marklogic/customers/" + this.$route.params.customerID
    );
    this.customers = result;
    this.bookList = this.customers.bookID;

    let books = await axiosInvocation.methods.axiosInvoc(
      "http://localhost:3000/marklogic/books"
    );
    this.bookData = books;
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  color: rgb(0, 102, 255);
  margin-bottom: 15px;
  margin-top: 15px;
  cursor: default;
}
p {
  padding: 10px;
}
div {
  padding: 10px;
  margin: 10px;
  margin-top: 0px;
  padding-top: 0px;
}
.formCompo {
  display: block;
  padding: 10px;
  margin: auto;
  margin-top: 2%;
  margin-bottom: 2%;
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
  margin-top: 10px;
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

.inputLabel {
  display: flex;
  padding-block: 4px;
  padding-inline: 20px;
  color: black;
  font-size: 83%;
  cursor: pointer;
}
.label {
  padding-top: 10px;
}
.checkbox {
  margin-right: 15px;
  cursor: pointer;
}
hr {
  margin-left: 20px;
  margin-right: 20px;
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