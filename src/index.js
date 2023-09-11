 import {header, coverPic, paragraph} from './home'; 
 import './style.css';
 import cover from './cover.jpeg'

const homeTab = document.createElement("button");
homeTab.textContent="Home";

const contactTab = document.createElement("button");
contactTab.textContent="Contact";

const menuTab = document.createElement("button");
menuTab.textContent="Menu";




const content = document.querySelector("#content");
content.append(homeTab, contactTab, menuTab);


content.append(header(), coverPic(cover), paragraph());  

