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
          childElements: [
            {
              elementType: "div",
              elementClass: "location",
              childElements: [
                {
                  elementType: "div",
                  elementClass: "city",
                },
                {
                  elementType: "div",
                  elementClass: "country",
                },
                {
                  elementType: "div",
                  elementClass: "date-time",
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
                      elementClass: "condition",
                      childElements: [
                        {
                          elementType: "div",
                          elementClass: "condition-icon",
                        },
                        {
                          elementType: "div",
                          elementClass: "condition-text",
                        },
                      ],
                    },
                    {
                      elementType: "div",
                      elementClass: "temperature",
                    },
                    {
                      elementType: "div",
                      elementClass: "feels-like",
                    },
                  ],
                },
                {
                  elementType: "div",
                  elementClass: "hourly-forecast",
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
                },
                {
                  elementType: "div",
                  elementClass: "day-two",
                },
                {
                  elementType: "div",
                  elementClass: "day-three",
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
