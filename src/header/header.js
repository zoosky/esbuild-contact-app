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
 