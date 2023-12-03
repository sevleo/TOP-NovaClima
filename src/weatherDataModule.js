import createDom from "./domHandler";

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

  // Add event listener to trigger API call, and display the received data
  function handleLocationSearch() {
    const searchForm = document.querySelector(".search-form");
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const cityName = document.querySelector("#search");
      const url = `https://api.weatherapi.com/v1/current.json?key=027eb181bc914763a0e140125232911&q=${cityName.value}`;

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

          console.log(todayWeather);
        })
        .catch((error) => {
          console.log(error.message);
          if (error.originalError) {
            console.log("Original error object: ", error.originalError);
          }
        });
    });
  }

  return handleLocationSearch;
})();

export default WeatherDataModule;
