<template>
  <div>
    <p>Hi, Yo!</p>
  </div>
  <div>
    <table class="table">
      <thead>
        <tr>
          <td>Book ID</td>
          <td>Book Title</td>
          <td>ISSN No.</td>
          <td>Customer</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in books" :key="item.bookID">
          <td>{{ item.bookID }}</td>
          <td>{{ item.bookTitle }}</td>
          <td>{{ item.issnNo }}</td>
          <td>
            <button>View</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axiosInvocation from "./axioInvocation.js";
export default {
  name: "testAxios",

  data() {
    return {
      books: [],
    };
  },

  async mounted() {
    let result = await axiosInvocation.methods.axiosInvoc(
      "http://localhost:3000/marklogic/books"
    );
    this.books = result;
    console.log(this.books);

  }
};
</script>