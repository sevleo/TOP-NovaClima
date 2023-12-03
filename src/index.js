import "./styles.css";
import createDom from "./domHandler";
import handleLocationSearch from "./weatherDataModule";

const defaultLocation = {
  city: "London",
  country: "UK",
  // conditionText: json.current.condition.text,
  // conditionIcon: json.current.condition.icon,
  // feelsLikeC: json.current.feelslike_c,
  // feelsLikeF: json.current.feelslike_f,
  // tempC: json.current.temp_c,
  // tempF: json.current.temp_f,
};

createDom.createStaticDomElements(
  createDom.defineStaticDomTree(),
  document.querySelector("body"),
);

createDom.createDynamicDomElements(
  createDom.defineDynamicDomTree(defaultLocation),
  document.querySelector(".wrapper"),
);

handleLocationSearch();
