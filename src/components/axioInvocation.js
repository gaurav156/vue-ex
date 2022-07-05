import axios from "axios";

export default{
name : "axiosInvocation",

methods : {
    async axiosInvoc(uri){
        let response = await axios.get(uri, { timeout: 5000 });
        return response.data;
    },

    async deleteBook(bookID){
        let result = await axios.delete("http://localhost:3000/marklogic/books/"+bookID);
        return result;
    },

    async deleteCustomer(customerID){
        let result = await axios.delete("http://localhost:3000/marklogic/customer/"+customerID);
        return result;
    }
}

}
