import header_template from "./header.html"
import logo from './logo.png'
import add_icon from './add.png'
import "./header.scss"
/**
 * header
 */

export function renderHeader() {
 const header = document.createElement("div");
 header.className = "header";
 
 header.innerHTML = header_template;
 header.querySelector('.app-logo').setAttribute('src', logo)
 header.querySelector('.add-icon').setAttribute('src', add_icon)
 
 document.body.appendChild(header);
}