import header_template from "./header.html"
/**
 * header
 */

 const header = document.createElement("div");
 header.className = "header";
 
 header.innerHTML = header_template;
 
 document.body.appendChild(header);
 