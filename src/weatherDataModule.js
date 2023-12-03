import createDom from "./domHandler";

// The module is responsible for extracting and displaying location data
const WeatherDataModule = (() => {
  // Call the API to extract the weather data in json on specified location
  async function loadJson(url) {
    try {
      const response = await fetch(url, {
        mode: "cors",
      });

      if (!response.ok) {
        const error = new Error(`HTTP error! Status: ${response.status}`);
        error.originalError = await response.json();
        throw error;
      }
      const json = await response.json();
      return json;
    } catch (error) {
      const newError = new Error(
        `Error fetching or parsing JSON: ${error.message}`,
      );
      if (error.originalError) {
        newError.originalError = error.originalError;
      }
      throw newError;
    }
  }

  // Helper function processing json and parsing data
  function parseLocationData(url) {
    loadJson(url)
      .then((json) => {
        console.log(json);

        const todayWeather = {
          city: json.location.name,
          country: json.location.country,
          conditionText: json.current.condition.text,
          conditionIcon: json.current.condition.icon,
          feelsLikeC: json.current.feelslike_c,
          feelsLikeF: json.current.feelslike_f,
          tempC: json.current.temp_c,
          tempF: json.current.temp_f,
        };

        createDom.deleteDynamicDomElements();
        createDom.createDynamicDomElements(
          createDom.defineDynamicDomTree(todayWeather),
          document.querySelector(".wrapper"),
        );
      })
      .catch((error) => {
        console.log(error.message);
        if (error.originalError) {
          console.log("Original error object: ", error.originalError);
        }
      });
  }

  // Show data based on user location during page load
  function showDefaultLocationData() {
    const cityName = "London";
    const url = `https://api.weatherapi.com/v1/current.json?key=027eb181bc914763a0e140125232911&q=${cityName}`;
    parseLocationData(url);
  }

  // Show data based on user search
  function showSearchedLocationData() {
    const searchForm = document.querySelector(".search-form");
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const cityName = document.querySelector("#search");
      const url = `https://api.weatherapi.com/v1/current.json?key=027eb181bc914763a0e140125232911&q=${cityName.value}`;
      parseLocationData(url);
    });
  }

  // Show data based on determiend user's location
  async function showUserLocationData() {
    let ipAddress;
    try {
      const ipResponse = await fetch("https://api.ipify.org?format=json");
      const ipData = await ipResponse.json();
      ipAddress = ipData.ip;
    } catch (error) {
      showDefaultLocationData();
    }

    if (ipAddress) {
      try {
        const locationResponse = await fetch(
          `https://ipapi.co/${ipAddress}/json/`,
        );
        const locationData = await locationResponse.json();
        const { latitude, longitude } = locationData;
        const url = `https://api.weatherapi.com/v1/current.json?key=027eb181bc914763a0e140125232911&q=${latitude},${longitude}`;
        parseLocationData(url);
        return;
      } catch (error) {
        showDefaultLocationData();
      }
    }
    showDefaultLocationData();
  }

  return {
    showSearchedLocationData,
    showUserLocationData,
  };
})();

export default WeatherDataModule;
