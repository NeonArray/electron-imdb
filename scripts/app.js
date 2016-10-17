const fetch = require('./scripts/api/request');
const form = document.getElementById("film");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const query = document.getElementById("title");

  if (query.value !== "") {
    fetch(query.value).then((res) => {
      if (res.data.Error) {
        showErrorMessage(res);
      } else {
        displayResult(res);
      }
    });
  } else {
    // highlight the form field if empty
    query.style.borderColor = "tomato";
  }
});

function displayResult(res) {
  document.getElementById("result--title").innerText = ifExists(res.data.Title);
  document.getElementById("result--year").innerText = ifExists(res.data.Year);
  document.getElementById("result--plot").innerText = ifExists(res.data.Plot);
  document.getElementById("result--poster").src = ifExists(res.data.Poster);
}

function showErrorMessage(res) {
  document.getElementById("result--title").innerText = res.data.Error;
}

// The API returns "N/A" for any properties that do not have a value
// I'm not sure why it isn't just set as undefined, as this method
// seems like an anti-pattern
function ifExists(obj) {
  return (obj !== "N/A" ? obj : "");
}