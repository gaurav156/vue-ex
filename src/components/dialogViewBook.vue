<template>
  <div class="backdrop"></div>
  <div class="dialog">
    <slot></slot>
    <table class="dialogTable">
      <thead>
        <tr>
          <td class="tableHeaderData">Book Title:</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in resultFinalBook" :key="item">
          <td class="tableBodyData">{{ item }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axiosInvocation from "./axioInvocation.js";
export default {
  name: "dialogViewBook",
  props: {
    bookIDListDialog: {},
  },
  data() {
    return {
      resultFinalBook: [],
    };
  },

  async mounted() {

    // let result = await axiosInvocation.methods.axiosInvoc(
    //   "http://localhost:3000/marklogic/books"
    // );
    // this.displayTableBook = result;

    // for (var a = 0; a < this.displayTableBook.length; a++) {
    //   for (var b = 0; b < this.bookIDListDialog.length; b++) {
    //     if (this.bookIDListDialog[b] === this.displayTableBook[a].bookID) {
    //       this.resultFinalBook.push(this.displayTableBook[a].bookTitle);
    //     }
    //   }
    // }

    for(var a = 0; a < this.bookIDListDialog.length; a++){
      let res = await axiosInvocation.methods.axiosInvoc(
      "http://localhost:3000/marklogic/books/"+this.bookIDListDialog[a]);
      this.resultFinalBook.push(res.bookTitle)
    }

  }
};
</script>