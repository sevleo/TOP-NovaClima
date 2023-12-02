const createDom = (() => {
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
              elementClass: "form-wrapper",
              childElements: [
                {
                  elementType: "form",
                  elementClass: "search-form",
                  childElements: [
                    {
                      elementType: "label",
                      elementClass: "",
                      elementTextContent: "Search",
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
                          attributeValue: "text",
                        },
                        {
                          attributeName: "id",
                          attributeValue: "search",
                        },
                        {
                          attributeName: "placeholder",
                          attributeValue: "search location",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          elementType: "div",
          elementClass: "main-container",
        },
        {
          elementType: "div",
          elementClass: "footer",
        },
      ],
    },
  ];

  const body = document.querySelector("body");

  // Create DOM elements based on the DOMTree
  function createDomElements(tree, parentElement) {
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
