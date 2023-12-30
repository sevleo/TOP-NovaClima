// eslint-disable-next-line import/no-extraneous-dependencies
import { format, parseISO } from "date-fns";

const manageDom = (() => {
  function defineStaticDomTree() {
    const DOMTree = [
      {
        elementType: "div",
        elementClass: "wrapper",
        childElements: [
          {
            elementType: "div",
            elementClass: "top-nav",
            childElements: [
              {
                elementType: "div",
                elementClass: "logo",
                elementTextContent: "NovaClima",
              },
              {
                elementType: "div",
                elementClass: "form-wrapper",
                childElements: [
                  {
                    elementType: "div",
                    elementClass: "loader",
                    elementInnerHTML: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: transparent; display: block; shape-rendering: auto;" width="50px" height="50px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                    <g transform="rotate(0 50 50)">
                      <rect x="46.5" y="24" rx="3.5" ry="6" width="7" height="12" fill="#ff0000">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.408450704225352s" begin="-1.2910798122065725s" repeatCount="indefinite"/>
                      </rect>
                    </g><g transform="rotate(30 50 50)">
                      <rect x="46.5" y="24" rx="3.5" ry="6" width="7" height="12" fill="#ff0000">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.408450704225352s" begin="-1.1737089201877933s" repeatCount="indefinite"/>
                      </rect>
                    </g><g transform="rotate(60 50 50)">
                      <rect x="46.5" y="24" rx="3.5" ry="6" width="7" height="12" fill="#ff0000">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.408450704225352s" begin="-1.056338028169014s" repeatCount="indefinite"/>
                      </rect>
                    </g><g transform="rotate(90 50 50)">
                      <rect x="46.5" y="24" rx="3.5" ry="6" width="7" height="12" fill="#ff0000">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.408450704225352s" begin="-0.9389671361502346s" repeatCount="indefinite"/>
                      </rect>
                    </g><g transform="rotate(120 50 50)">
                      <rect x="46.5" y="24" rx="3.5" ry="6" width="7" height="12" fill="#ff0000">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.408450704225352s" begin="-0.8215962441314553s" repeatCount="indefinite"/>
                      </rect>
                    </g><g transform="rotate(150 50 50)">
                      <rect x="46.5" y="24" rx="3.5" ry="6" width="7" height="12" fill="#ff0000">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.408450704225352s" begin="-0.7042253521126759s" repeatCount="indefinite"/>
                      </rect>
                    </g><g transform="rotate(180 50 50)">
                      <rect x="46.5" y="24" rx="3.5" ry="6" width="7" height="12" fill="#ff0000">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.408450704225352s" begin="-0.5868544600938966s" repeatCount="indefinite"/>
                      </rect>
                    </g><g transform="rotate(210 50 50)">
                      <rect x="46.5" y="24" rx="3.5" ry="6" width="7" height="12" fill="#ff0000">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.408450704225352s" begin="-0.4694835680751173s" repeatCount="indefinite"/>
                      </rect>
                    </g><g transform="rotate(240 50 50)">
                      <rect x="46.5" y="24" rx="3.5" ry="6" width="7" height="12" fill="#ff0000">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.408450704225352s" begin="-0.35211267605633795s" repeatCount="indefinite"/>
                      </rect>
                    </g><g transform="rotate(270 50 50)">
                      <rect x="46.5" y="24" rx="3.5" ry="6" width="7" height="12" fill="#ff0000">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.408450704225352s" begin="-0.23474178403755866s" repeatCount="indefinite"/>
                      </rect>
                    </g><g transform="rotate(300 50 50)">
                      <rect x="46.5" y="24" rx="3.5" ry="6" width="7" height="12" fill="#ff0000">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.408450704225352s" begin="-0.11737089201877933s" repeatCount="indefinite"/>
                      </rect>
                    </g><g transform="rotate(330 50 50)">
                      <rect x="46.5" y="24" rx="3.5" ry="6" width="7" height="12" fill="#ff0000">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.408450704225352s" begin="0s" repeatCount="indefinite"/>
                      </rect>
                    </g>
                    <!-- [ldio] generated by https://loading.io/ --></svg>`,
                  },
                  {
                    elementType: "form",
                    elementClass: "search-form",
                    childElements: [
                      {
                        elementType: "label",
                        elementClass: "",
                        elementTextContent: "",
                        elementAttributes: [
                          {
                            attributeName: "for",
                            attributeValue: "search",
                          },
                        ],
                      },
                      {
                        elementType: "input",
                        elementClass: "",
                        elementAttributes: [
                          {
                            attributeName: "type",
                            attributeValue: "search",
                          },
                          {
                            attributeName: "id",
                            attributeValue: "search",
                          },
                          {
                            attributeName: "placeholder",
                            attributeValue: "Search location",
                          },
                        ],
                      },
                      {
                        elementType: "button",
                        elementClass: "search-submit-button",
                        elementInnerHTML: `<svg class="svg-inline-submit" aria-hidden="true" focusable="false" data-prefix="far" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="white" d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path></svg>`,
                        elementAttributes: [
                          {
                            attributeName: "type",
                            attributeValue: "submit",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                elementType: "div",
                elementClass: "temp-units",
                childElements: [
                  {
                    elementType: "div",
                    elementClass: "selected",
                    elementTextContent: "°C",
                    elementAttributes: [
                      {
                        attributeName: "id",
                        attributeValue: "celcius",
                      },
                    ],
                  },
                  {
                    elementType: "div",
                    elementClass: "",
                    elementTextContent: "°F",
                    elementAttributes: [
                      {
                        attributeName: "id",
                        attributeValue: "fahrenheit",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            elementType: "div",
            elementClass: "footer",
          },
        ],
      },
    ];

    return DOMTree;
  }

  function defineDynamicDomTree(data) {
    const [date, time] = data.current.localTime.split(" ");

    const DOMTree = [
      {
        elementType: "div",
        elementClass: "main-container",
        childElements: [
          {
            elementType: "div",
            elementClass: "location",
            childElements: [
              {
                elementType: "div",
                elementClass: "city-country",
                elementTextContent: `${data.current.city}, ${data.current.country}`,
              },

              {
                elementType: "div",
                elementClass: "date-time",
                elementTextContent: `${format(
                  parseISO(date),
                  "iiii do 'of' MMMM y",
                )} | ${time}`,
              },
            ],
          },
          {
            elementType: "div",
            elementClass: "today",
            childElements: [
              {
                elementType: "div",
                elementClass: "current",
                childElements: [
                  {
                    elementType: "div",
                    elementClass: "condition-icon-container",
                    elementInnerHTML: data.current.conditionIcon,
                  },
                  {
                    elementType: "div",
                    elementClass: "condition-text",
                    elementTextContent: data.current.conditionText,
                  },
                  {
                    elementType: "div",
                    elementClass: "temperature",
                    elementTextContent: `${data.current.tempC}°C`,
                    elementAttributes: [
                      {
                        attributeName: "unit",
                        attributeValue: "C",
                      },
                    ],
                  },
                  {
                    elementType: "div",
                    elementClass: "temperature",
                    elementTextContent: `${data.current.tempF}°F`,
                    elementAttributes: [
                      {
                        attributeName: "unit",
                        attributeValue: "F",
                      },
                      {
                        attributeName: "hidden",
                        attributeValue: "true",
                      },
                    ],
                  },
                  {
                    elementType: "div",
                    elementClass: "feels-like",
                    elementTextContent: `Feels like ${data.current.feelsLikeC}°C`,
                    elementAttributes: [
                      {
                        attributeName: "unit",
                        attributeValue: "C",
                      },
                    ],
                  },
                  {
                    elementType: "div",
                    elementClass: "feels-like",
                    elementTextContent: `Feels like ${data.current.feelsLikeF}°F`,
                    elementAttributes: [
                      {
                        attributeName: "unit",
                        attributeValue: "F",
                      },
                      {
                        attributeName: "hidden",
                        attributeValue: "true",
                      },
                    ],
                  },
                  {
                    elementType: "div",
                    elementClass: "humidity-container",
                    childElements: [
                      {
                        elementType: "div",
                        elementClass: "humidity-label",
                        elementTextContent: `Humidity`,
                      },
                      {
                        elementType: "div",
                        elementClass: "humidity-value",
                        elementTextContent: `${data.current.humidity}%`,
                      },
                    ],
                  },
                  {
                    elementType: "div",
                    elementClass: "visibility-container",
                    childElements: [
                      {
                        elementType: "div",
                        elementClass: "visibility-label",
                        elementTextContent: `Visibility`,
                      },
                      {
                        elementType: "div",
                        elementClass: "visibility-value",
                        elementTextContent: `${data.current.visibility}km`,
                      },
                    ],
                  },
                  {
                    elementType: "div",
                    elementClass: "cloudiness-container",
                    childElements: [
                      {
                        elementType: "div",
                        elementClass: "cloudiness-label",
                        elementTextContent: `Cloudiness`,
                      },
                      {
                        elementType: "div",
                        elementClass: "cloudiness-value",
                        elementTextContent: `${data.current.cloudiness}%`,
                      },
                    ],
                  },
                  {
                    elementType: "div",
                    elementClass: "moon-illumination-container",
                    childElements: [
                      {
                        elementType: "div",
                        elementClass: "moon-illumination-label",
                        elementTextContent: `Moon Illumination`,
                      },
                      {
                        elementType: "div",
                        elementClass: "moon-illumination-value",
                        elementTextContent: `${data.current.moonIllumination}%`,
                      },
                    ],
                  },
                  {
                    elementType: "div",
                    elementClass: "sunrise-container",
                    childElements: [
                      {
                        elementType: "div",
                        elementClass: "sunrise-label",
                        elementTextContent: `Sunrise`,
                      },
                      {
                        elementType: "div",
                        elementClass: "sunrise-value",
                        elementTextContent: `${data.current.sunrise}`,
                      },
                    ],
                  },
                  {
                    elementType: "div",
                    elementClass: "sunset-container",
                    childElements: [
                      {
                        elementType: "div",
                        elementClass: "sunset-label",
                        elementTextContent: `Sunset`,
                      },
                      {
                        elementType: "div",
                        elementClass: "sunset-value",
                        elementTextContent: `${data.current.sunset}`,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            elementType: "div",
            elementClass: "daily-forecast",
            childElements: [
              {
                elementType: "div",
                elementClass: "day-one",
                childElements: [
                  {
                    elementType: "div",
                    elementClass: "date",
                    elementTextContent: `${format(
                      parseISO(data.forecast[0].date),
                      "iiii",
                    )}`,
                  },
                  {
                    elementType: "div",
                    elementClass: "forecast-condition-icon-container",
                    elementInnerHTML: data.forecast[0].conditionIcon,
                  },
                  {
                    elementType: "div",
                    elementClass: "temperature",
                    elementTextContent: `${data.forecast[0].avgtemp_c}°C`,
                    elementAttributes: [
                      {
                        attributeName: "unit",
                        attributeValue: "C",
                      },
                    ],
                  },
                  {
                    elementType: "div",
                    elementClass: "temperature",
                    elementTextContent: `${data.forecast[0].avgtemp_f}°F`,
                    elementAttributes: [
                      {
                        attributeName: "unit",
                        attributeValue: "F",
                      },
                      {
                        attributeName: "hidden",
                        attributeValue: "true",
                      },
                    ],
                  },
                  {
                    elementType: "div",
                    elementClass: "forecast-condition-text",
                    elementTextContent: data.forecast[0].conditionText,
                  },
                ],
              },
              {
                elementType: "div",
                elementClass: "day-two",
                childElements: [
                  {
                    elementType: "div",
                    elementClass: "date",
                    elementTextContent: `${format(
                      parseISO(data.forecast[1].date),
                      "iiii",
                    )}`,
                  },
                  {
                    elementType: "div",
                    elementClass: "forecast-condition-icon-container",
                    elementInnerHTML: data.forecast[1].conditionIcon,
                  },
                  {
                    elementType: "div",
                    elementClass: "temperature",
                    elementTextContent: `${data.forecast[1].avgtemp_c}°C`,
                    elementAttributes: [
                      {
                        attributeName: "unit",
                        attributeValue: "C",
                      },
                    ],
                  },
                  {
                    elementType: "div",
                    elementClass: "temperature",
                    elementTextContent: `${data.forecast[1].avgtemp_f}°F`,
                    elementAttributes: [
                      {
                        attributeName: "unit",
                        attributeValue: "F",
                      },
                      {
                        attributeName: "hidden",
                        attributeValue: "true",
                      },
                    ],
                  },
                  {
                    elementType: "div",
                    elementClass: "forecast-condition-text",
                    elementTextContent: data.forecast[1].conditionText,
                  },
                ],
              },
              // {
              //   elementType: "div",
              //   elementClass: "day-three",
              //   childElements: [
              //     {
              //       elementType: "div",
              //       elementClass: "date",
              //       elementTextContent: `${format(
              //         parseISO(data.forecast[2].date),
              //         "iiii",
              //       )}`,
              //     },
              //     {
              //       elementType: "div",
              //       elementClass: "forecast-condition-icon-container",
              //       elementInnerHTML: data.forecast[2].conditionIcon,
              //     },
              //     {
              //       elementType: "div",
              //       elementClass: "temperature",
              //       elementTextContent: `${data.forecast[2].avgtemp_c}°C`,
              //       elementAttributes: [
              //         {
              //           attributeName: "unit",
              //           attributeValue: "C",
              //         },
              //       ],
              //     },
              //     {
              //       elementType: "div",
              //       elementClass: "temperature",
              //       elementTextContent: `${data.forecast[2].avgtemp_f}°F`,
              //       elementAttributes: [
              //         {
              //           attributeName: "unit",
              //           attributeValue: "F",
              //         },
              //         {
              //           attributeName: "hidden",
              //           attributeValue: "true",
              //         },
              //       ],
              //     },
              //     {
              //       elementType: "div",
              //       elementClass: "forecast-condition-text",
              //       elementTextContent: data.forecast[2].conditionText,
              //     },
              //   ],
              // },
            ],
          },
        ],
      },
    ];

    return DOMTree;
  }

  function createDomElementsHelper(tree, parentElement) {
    tree.forEach((obj) => {
      const element = document.createElement(obj.elementType);
      if (obj.elementClass) {
        element.classList.add(obj.elementClass);
      }
      if (obj.elementAttributes) {
        obj.elementAttributes.forEach((att) => {
          element.setAttribute(att.attributeName, att.attributeValue);
        });
      }
      if (obj.elementTextContent) {
        element.textContent = obj.elementTextContent;
      }
      if (obj.elementInnerHTML) {
        element.innerHTML = obj.elementInnerHTML;
      }
      parentElement.append(element);

      if (obj.childElements) {
        createDomElementsHelper(obj.childElements, element);
      }
    });
  }

  // Create DOM elements based on the DOMTree
  function createStaticDomElements(tree, parentElement) {
    createDomElementsHelper(tree, parentElement);
  }

  function createDynamicDomElements(tree, parentElement) {
    createDomElementsHelper(tree, parentElement);
  }

  function deleteDynamicDomElements() {
    const existingWrapper = document.querySelector(".main-container");
    if (existingWrapper) {
      existingWrapper.remove();
    }
  }

  function createError() {
    const wrapper = document.querySelector(".wrapper");
    const errorDiv = document.createElement("div");
    errorDiv.classList.add("error");
    errorDiv.textContent = "Something went wrong!";
    wrapper.append(errorDiv);
  }

  function deleteError() {
    const error = document.querySelector(".error");
    if (error) {
      error.remove();
    }
  }

  return {
    defineStaticDomTree,
    defineDynamicDomTree,
    createStaticDomElements,
    createDynamicDomElements,
    deleteDynamicDomElements,
    createError,
    deleteError,
  };
})();

export default manageDom;
