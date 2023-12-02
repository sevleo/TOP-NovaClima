const createDom = (() => {
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

  return () => {
    createDomElements(DOMTree, body);
  };
})();

export default createDom;
