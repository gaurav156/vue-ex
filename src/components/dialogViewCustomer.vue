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
    customerIDListDialog: {}
  },
  data() {
    return {
      resultFinalCustomer: [],
    };
  },

  async mounted() {

    // let result = await axiosInvocation.methods.axiosInvoc(
    //   "http://localhost:3000/marklogic/customers"
    // );
    // this.displayTableCustomer = result;

    // for (var i = 0; i < this.displayTableCustomer.length; i++) {
    //   for (var j = 0; j < this.customerIDListDialog.length; j++) {
    //     if (this.customerIDListDialog[j] === this.displayTableCustomer[i].customerID) {
    //       this.resultFinalCustomer.push(this.displayTableCustomer[i].customerName);
    //     }
    //   }
    // }

    for(var a = 0; a < this.customerIDListDialog.length; a++){
      let result = await axiosInvocation.methods.axiosInvoc(
      "http://localhost:3000/marklogic/customers/"+this.customerIDListDialog[a]);
      this.resultFinalCustomer.push(result.customerName)
    }

  }
};
</script>