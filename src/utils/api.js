import axios from "axios";

const API = {
    getUsers: function () {
        return axios.get("https://randomuser.me/api/?results=100&nat=US");
    }
}
export default API;