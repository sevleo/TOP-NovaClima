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

export default loadJson;
