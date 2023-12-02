import "./styles.css";

const DOMTree = [
  {
    elementType: "div",
    elementClass: "wrapper",
    elementId: "",
    childElements: [
      {
        elementType: "div",
        elementClass: "top-nav",
        elementId: "",
      },
      {
        elementType: "div",
        elementClass: "main-container",
        elementId: "",
      },
      {
        elementType: "div",
        elementClass: "footer",
        elementId: "",
      },
    ],
  },
];

const body = document.querySelector("body");

function createDomElements(tree, parentElement) {
  tree.forEach((obj) => {
    const element = document.createElement(obj.elementType);
    element.classList.add(obj.elementClass);
    parentElement.append(element);

    if (obj.childElements) {
      createDomElements(obj.childElements, element);
    }
  });
}

createDomElements(DOMTree, body);

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

loadJson(
  "https://api.weatherapi.com/v1/current.json?key=027eb181bc914763a0e140125232911&q=lodndon",
)
  .then((json) => {
    console.log(json);
  })
  .catch((error) => {
    console.log(error.message);
    if (error.originalError) {
      console.log("Original error object: ", error.originalError);
    }
  });
