 //import {header, coverPic, paragraph} from './home'; 
 import { home } from './home';
 import { menu } from './menu';
 import { contact } from './contact';
 import { attributions } from './attributions';
 import { footer } from './footer';
 /* import { navbar } from './navbar'; */
 import './style.css';
 import cover from './cover.jpeg'

/////////////////////////////////////////////
 //Navbar
const navbar = document.createElement("div");
navbar.id = "navbar";
navbar.classList.add("boxShadow");

const logoNavbar = document.createElement("div");
logoNavbar.id = "logo";
logoNavbar.textContent = "T's T&T";

logoNavbar.addEventListener("click", ()=>{
    console.log("Clicked on logo");
    refreshDOM(home());
})

const rightContainer = document.createElement("ul");

const homeTab = document.createElement("li");
homeTab.textContent="Home";

const contactTab = document.createElement("li");
contactTab.textContent="Contact";

const menuTab = document.createElement("li");
menuTab.textContent="Menu";
rightContainer.id = "rightContainer"

rightContainer.append(homeTab, menuTab, contactTab);

navbar.append(logoNavbar, rightContainer); 

////////////////////////////////////////////////

const breakLine = document.createElement("br");

const container = document.querySelector("#container");
const content = document.createElement("div");
content.id = "content";

content.append(home())


//Tabs functionality

homeTab.addEventListener("click", ()=>{
    console.log("Clicked on Home button");
    refreshDOM(home());
})

contactTab.addEventListener("click", ()=>{
    console.log("Clicked on Contact button");
    refreshDOM(contact());
})

menuTab.addEventListener("click", ()=>{
    console.log("Clicked on Menu button");
    refreshDOM(menu());
})

//Initial render
container.append(navbar);
container.append(content);
container.append(footer());

const attributionsTab = document.querySelector("#attributionsLink");
attributionsTab.addEventListener("click", ()=>{
    console.log("Attributions link clicked");
    refreshDOM(attributions());
})

// Clear container, break line, insert navbar, section, and footer
function refreshDOM(section){
    content.textContent = '';
    content.append(section);
}