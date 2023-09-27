 import {header, coverPic, paragraph} from './home'; 
 import { contact } from './contact';
 import './style.css';
 import cover from './cover.jpeg'

 //Navbar
const navbar = document.createElement("div");
navbar.id = "navbar";

const homeTab = document.createElement("button");
homeTab.textContent="Home";

const contactTab = document.createElement("button");
contactTab.textContent="Contact";

const menuTab = document.createElement("button");
menuTab.textContent="Menu";

navbar.append(homeTab, contactTab, menuTab);

const breakLine = document.createElement("br");

const content = document.querySelector("#content");
content.append(navbar);

//Tabs functionality
homeTab.addEventListener("click", ()=>{
    console.log("Clicked on Home button");
    content.textContent = '';
    content.append(navbar);
    content.append(header(), coverPic(cover), paragraph());  
    content.append(footer);
})

contactTab.addEventListener("click", ()=>{
    console.log("Clicked on Contact button");
    content.textContent = '';
    content.append(navbar);
    content.append(breakLine,contact());
    content.append(footer);
})

menuTab.addEventListener("click", ()=>{
    console.log("Clicked on Menu button");
    content.textContent='';
    content.append(navbar);
    content.append(breakLine,"Menu");
    content.append(footer);
})

//Footer
const footer = document.createElement("div");
footer.id = "footer";

const footerCopyright = document.createElement("h4")

const repositoryLink = document.createElement("a");
repositoryLink.href = "https://github.com/rafaelencinasr/restaurant";
repositoryLink.target = "_blank";
repositoryLink.textContent = "Rafael Encinas © 2023";

footerCopyright.append(repositoryLink);
footer.append(footerCopyright);

//Initial render
content.append(header(), coverPic(cover), paragraph());
content.append(footer);

