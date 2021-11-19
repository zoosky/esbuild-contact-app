/**
 * header
 */
const header = document.createElement("div");
header.className = "header";

header.innerHTML = `
    <img src="./logo.png" class="app-logo" />
    <h1 class="app-name">Contact App</h1>
    <img src="./add.png" class="add-icon" />
  `;

document.body.appendChild(header);

/**
 * contact list
 */
const contacts = [
  {
    name: "Christopher L Sanders",
    phone: "769-232-1807",
  },
  {
    name: "Frances J Nolte",
    phone: "901-287-0419",
  },
];

const contactList = document.createElement("div");

contactList.className = "contact-list";

contacts.forEach((entry) => {
  const element = document.createElement("div");
  element.className = "contact";

  element.innerHTML = `
    <h2 class="name">${entry.name}</h2>
    
    <p class="phone">${entry.phone}</p>
  `;

  contactList.appendChild(element);
});

document.body.appendChild(contactList);
