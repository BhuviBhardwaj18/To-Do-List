import axios from "axios";

// Example GET request
async function getData() {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getData();
