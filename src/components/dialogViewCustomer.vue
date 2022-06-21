<template>
  <div class="backdrop"></div>
  <div class="dialog">
    <slot></slot>
    <div>
      <table class="dialogTable">
        <thead>
          <tr>
            <td class="tableHeaderData">Customer Name:</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in resultFinalCustomer" :key="item">
            <td class="tableBodyData">{{ item }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axiosInvocation from "./axioInvocation.js";
export default {
  name: "dialogView",
  props: {
    bookIDListDialog: String,
    customerIDListDialog: String,
  },
  data() {
    return {
      displayTableCustomer: [],
      resultFinalCustomer: [],
    };
  },

  async mounted() {
    // let resultCustomer = await axios
    //   .get("http://localhost:3000/marklogic/customers", { timeout: 2000 })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // this.displayTableCustomer = resultCustomer.data;

    let result = await axiosInvocation.methods.axiosInvoc(
      "http://localhost:3000/marklogic/customers"
    );
    this.displayTableCustomer = result;

    for (var i = 0; i < this.displayTableCustomer.length; i++) {
      for (var j = 0; j < this.customerIDListDialog.length; j++) {
        if (this.customerIDListDialog[j] === this.displayTableCustomer[i].customerID) {
          this.resultFinalCustomer.push(this.displayTableCustomer[i].customerName);
        }
      }
    }
  },
};
</script>