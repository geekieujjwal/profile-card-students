const mainContainer = document.querySelector(".main-container");
const input = document.getElementById("search-input");
const search = document.querySelector(".search-icon");
let html = "";
let users = [];

//ASYNC AWAIT METHOD

async function getData() {
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();
  let users = data.users;
  users.map((content) => {
    const { firstName, university, address, phone, email, image } = content;
    html += `
    <div class="container">
    <div class="header">
      <div id="avatar">
        <img src="${image}" alt="Avatar" />
      </div>
    </div>

    <div class="main">
      <h1 id="name">${firstName}</h1>
      <h2 id="university">${university}</h2>
      <p id="city">${address.city}</p>
      <div class="buttons">
        <button class="button">Subscribe</button>
        <button class="button">Message</button>
      </div>
    </div>

    <div class="footer">
      <div class="phone">
        <span class="material-symbols-outlined">call</span>
        <span id="contact-no">${phone}</span>
      </div>
      <div class="email">
        <span class="material-symbols-outlined">mail</span>
        <span id="email-id">${email}</span>
      </div>
    </div>
  </div>
    `;
  });
  mainContainer.innerHTML = html;

  input.addEventListener("input", (e) => {
    html = "";
    let inputText = e.target.value.toLowerCase();
    const sameName = data.users.filter((object) =>
      object.firstName.toLowerCase().includes(inputText)
    );
    sameName.map((content) => {
      const { firstName, university, address, phone, email, image } = content;
      html += `
                  <div class="container">
                  <div class="header">
                    <div id="avatar">
                      <img src="${image}" alt="Avatar" />
                    </div>
                  </div>
  
                  <div class="main">
                    <h1 id="name">${firstName}</h1>
                    <h2 id="university">${university}</h2>
                    <p id="city">${address.city}</p>
                    <div class="buttons">
                      <button class="button">Subscribe</button>
                      <button class="button">Message</button>
                    </div>
                  </div>
  
                  <div class="footer">
                    <div class="phone">
                      <span class="material-symbols-outlined">call</span>
                      <span id="contact-no">${phone}</span>
                    </div>
                    <div class="email">
                      <span class="material-symbols-outlined">mail</span>
                      <span id="email-id">${email}</span>
                    </div>
                  </div>
                </div>
                  `;
    });
    mainContainer.innerHTML = html;
    console.log(sameName);
  });
}

getData();
