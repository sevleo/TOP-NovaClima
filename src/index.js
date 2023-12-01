import "./styles.css";

const DOMTree = [
  {
    elementType: "div",
    elementClass: "main",
    elementId: "",
    childElements: [
      {
        elementType: "div",
        elementClass: "secondary",
        elementId: "",
      },
      {
        elementType: "div",
        elementClass: "secondary",
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
