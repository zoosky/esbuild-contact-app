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
  