import axios from "axios";

// const API_KEY = "YOUR_API_KEY";  // Replace with your actual API key
// const BASE_URL = "https://api.themoviedb.org/3"; // TMDb API URL

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3";,
 
});

export default instance;
