import "./styles.css";
import createDom from "./domHandler";
import loadJson from "./loadWeatherData";

createDom();

const url =
  "https://api.weatherapi.com/v1/current.json?key=027eb181bc914763a0e140125232911&q=lodndon";

loadJson(url)
  .then((json) => {
    console.log(json);
  })
  .catch((error) => {
    console.log(error.message);
    if (error.originalError) {
      console.log("Original error object: ", error.originalError);
    }
  });
