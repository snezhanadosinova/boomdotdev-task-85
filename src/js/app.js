import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/?limit=10`;

  const ul = document.querySelector("ul");

  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  }

  function toJSON(response) {
    return response.json();
  }

  fetch(apiUrl)
    .then(checkStatus)
    .then(toJSON)
    .then((data) => {
      data.results.forEach((element) => {
        let listElement = document.createElement("li");
        listElement.innerText = element.name;
        ul.appendChild(listElement);
      });
    });
});
