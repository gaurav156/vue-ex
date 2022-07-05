<template>
  <headerLib />
  <div class="formCompo">
    <h2>Add Book</h2>
    <hr />
    <div class="inputDiv">
      <label for="bookID" class="label"
        >Book ID :
        <input
          class="inputText"
          type="text"
          name="bookID"
          placeholder="Book ID"
          v-model="books.bookID"
        />
      </label>

      <label for="bookTitle" class="label"
        >Book Title :
        <input
          class="inputText"
          type="text"
          name="bookTitle"
          placeholder="Book Title"
          v-model="books.bookTitle"
        />
      </label>

      <label for="issnNo" class="label"
        >Issn No. :
        <input
          class="inputText"
          type="text"
          name="issnNo"
          placeholder="Issn No"
          v-model="books.issnNo"
        />
      </label>

      <span class="label"
        >Customers :
        <label
          :for="item.customerID"
          v-for="item in customerData"
          :key="item"
          class="inputLabel"
        >
          <input
            type="checkbox"
            :id="item.customerID"
            name="customerID"
            :value="item.customerID"
            v-model="books.customerID"
            class="checkbox"
          />{{ item.customerID + " - " + item.customerName }}</label
        >
      </span>

      <button type="button" @click.prevent="addBook" class="submitBtn">
        Add
      </button>
      <router-link to="/" class="cancelBtn"> Cancel </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import headerLib from "./header.vue";
import axiosInvocation from "./axioInvocation.js";

export default {
  name: "addBook",
  components: {
    headerLib,
  },
  data() {
    return {
      books: {
        bookID: "",
        bookTitle: "",
        issnNo: "",
        customerID: [],
      },
      customerList: [],
      customerData: [],
    };
  },
  methods: {
    async addBook() {
      const result = await axios.post("http://localhost:3000/marklogic/books", {
        bookID: this.books.bookID,
        bookTitle: this.books.bookTitle,
        issnNo: this.books.issnNo,
        customerID: this.books.customerID,
      });
      if (result.status == 200) {
        this.$router.push({ name: "book" });
      }
    },
  },
  async mounted() {
    let username = localStorage.getItem("user-info");
    if (!username) {
      this.$router.push({ name: "login" });
    }

    // let result = await axiosInvocation.methods.axiosInvoc(
    //   "http://localhost:3000/marklogic/books/" + this.$route.params.bookID
    // );
    // this.books = result[0];
    // this.customerList = this.books.customerID;

    let customers = await axiosInvocation.methods.axiosInvoc(
      "http://localhost:3000/marklogic/customers"
    );
    this.customerData = customers;
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