/**
 * contact list
 */
import contacts from "./data.json"
  
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
  