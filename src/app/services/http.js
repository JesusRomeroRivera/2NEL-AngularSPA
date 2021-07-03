import axios from "axios";

export default axios.create({
  baseURL: "https://tunel-java-backend.herokuapp.com/api",
  headers: {
    "Content-type": "application/json",
    "Authorization": `Bearer ${localStorage.getItem("token")}`  
  },
});
