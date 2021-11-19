/**
 * contact list
 */
import contacts from "./data.json";
import  each from "underscore/modules/each.js";
import template from "./contact-list.html";
import "./contact-list.scss"
  
export function renderContactList() {

  const contactList = document.createElement("div");
  
  contactList.className = "contact-list";
  
  each (contacts,(entry) => {
    const element = document.createElement("div");
    element.className = "contact";
    
    element.innerHTML = template;
    element.querySelector('.name').innerHTML = entry.name;
    element.querySelector('.phone').innerHTML = entry.phone;
    
    contactList.appendChild(element);
  });
  
  document.body.appendChild(contactList);
}
  