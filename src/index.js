/* eslint-disable prefer-destructuring */
import "./styles.css";
import createDom from "./domHandler";
import WeatherDataModule from "./weatherDataModule";

createDom.createStaticDomElements(
  createDom.defineStaticDomTree(),
  document.querySelector("body"),
);

WeatherDataModule.showDefaultLocationData();
// WeatherDataModule.showUserLocationData();
WeatherDataModule.showSearchedLocationData();
WeatherDataModule.handleUnitOfMeasurementClick();
