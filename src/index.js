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
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    throw new Error(`Error fetching or parsing JSON: ${error.message}`);
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
  });
