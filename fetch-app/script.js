// Create variables

let data = document.getElementById("getData");
let list = document.getElementById("getList");
let submit = document.getElementById("submitForm");

// Add event listeners to each button

data.addEventListener("click", getData);
list.addEventListener("click", getList);
submit.addEventListener("click", submitForm);

// Message function

function getData() {
  fetch("https://mysite.itvarsity.org/api/fetch/get-data/")
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      document.getElementById("message").textContent = data;
    });
}

// Posts function

function getList() {
  fetch("https://mysite.itvarsity.org/api/fetch/get-list/")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let output = "<h1>Posts</h1>";
      for (let i = 0; i < data.length; i++) {
        output += `
        <ul>
          <li><h2>${data[i][0]}</h2></li>
          <li><b>${data[i][1]}</b></li>
          <li>${data[i][2]}</li>
        </ul>
      `;
      }

      document.getElementById("posts").innerHTML = output;
    });
}

// Greeting function

function submitForm(e) {
  e.preventDefault();

  form = new FormData(document.querySelector("#myForm"));
  fetch("https://mysite.itvarsity.org/api/fetch/send-data/", {
    method: "POST",
    headers: { Accept: "application/json, */*" },
    body: form,
  })
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      document.getElementById("greeting").innerHTML = data;
    });
}
