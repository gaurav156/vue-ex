import axios from "axios";

export default{
name : "axiosInvocation",

methods : {
    async axiosInvoc(uri){
        let response = await axios.get(uri, { timeout: 2000 });
        return response.data;
    }
}

}
