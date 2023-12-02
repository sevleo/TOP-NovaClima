import "./styles.css";
import createDom from "./domHandler";
import apiHandler from "./apiHandler";

createDom();

const url =
  "https://api.weatherapi.com/v1/current.json?key=027eb181bc914763a0e140125232911&q=lodndon";

apiHandler(url)
  .then((json) => {
    console.log(json);
  })
  .catch((error) => {
    console.log(error.message);
    if (error.originalError) {
      console.log("Original error object: ", error.originalError);
    }
  });
