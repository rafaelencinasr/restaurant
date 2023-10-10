(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>p});var o=t(81),a=t.n(o),r=t(645),i=t.n(r),c=t(667),s=t.n(c),d=new URL(t(88),t.b),l=i()(a());l.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Bangers&family=Koulen&family=League+Spartan:wght@400;700&family=Leckerli+One&display=swap);"]);var u=s()(d);l.push([e.id,`/* @font-face {\n    font-family: 'Koulen';\n    src: url('./Koulen-Regular.ttf');\n    font-weight: 400;\n    font-style: normal;\n} */\n\nhtml, body{\n    text-align: center;\n    height: 100%;\n    margin: 0;\n    background-image: url(${u});\n}\n\n.boxShadow{\n            /* offset-x | offset-y | blur-radius |      color */\n    box-shadow: 0px        4px         4px         rgba(0, 0, 0, 0.25);\n}\n\n#navbar {\n    background-color: #D9D9D9;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n     padding: 0 10px; \n     overflow: hidden;\n\n}\n\n#logo{\n    flex-shrink: 1;\n    font-family: 'Koulen', cursive;\n    font-size: 35px;\n    box-sizing: border-box;\n}\n\n#rightContainer{\n    display: flex;\n    padding: 0;\n    margin: 0;\n    align-items: center;\n}\n\n#rightContainer>li{\n    list-style-type: none;\n    font-family: 'League Spartan', sans-serif; \n    font-size: 20px;\n    background-color: #D9D9D9;\n    padding: 5px 15px;\n    border: none;\n    &:hover{\n        background-color: #e6e6e6;\n        cursor: pointer;\n        text-decoration: underline;\n    }\n}\n\n#content{\n    margin: 0 170px;\n}\n\n.sectionHeader{\n    font-size: 48px ;\n    font-family: 'Koulen', cursive;\n            /* offset-x | offset-y | blur-radius |      color */\n    text-shadow: 0px        4px         4px         rgba(0, 0, 0, 0.25);\n}\n\n.card{\n    height: 350px;\n    background-color: #D9D9D9;\n    border-radius: 50px ;\n    margin-bottom: 40px;\n    display: flex;\n    align-items: center;\n    overflow: hidden\n}\n\n.contactCard, .attributionsCard{\n    box-sizing: border-box;\n    height: 240px;\n    padding: 32px;\n    width: 440px;\n    background-color: #D9D9D9;\n    border-radius: 50px;\n    margin: 0 auto;\n    margin-bottom: 40px;\n    display: flex;\n    align-items: center;\n    \n}\n\n.contactInfoContainer{\n    margin: auto;\n}\n\n.contactInformationText{\n    font-family: 'League Spartan', sans-serif;\n}\n\n.contactPicture{\n    width: 160px;\n    height: 160px;\n    border-radius: 15px;\n    object-fit: cover;\n}\n\n.contactName{\n    font-family: 'Koulen', cursive;\n    text-align: center;\n    font-size: 36px;\n}\n.reverseOrder{\n    flex-direction: row-reverse;\n}\n\n.picContainer{\n    padding: 0;\n    margin: 0;\n    width: 50%;\n    height: 100%;\n}\n.cardPic{\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n    padding: 0;\n    margin: 0;\n}\n.cardInfo{\n    width: 50%;\n}\n\n.cardHeader{\n    font-family: 'Koulen', cursive;\n    font-size: 36px;\n    margin-top: 0;\n    margin-bottom: 20px;\n}\n\n.cardBody{\n    font-family: 'League Spartan', sans-serif;\n    margin: 0 65px; \n    line-height: 180%;\n    text-align: justify;\n}\n\n.alignRight{\n    font-family: 'League Spartan', sans-serif;\n    text-align: end;\n    margin: 0;\n    margin-right: 25px;\n}\n\n.hours{\n    text-align: center;\n}\n\n.address{\n    font-weight: bold;\n}\n\n.menuSection{\n    font-family: "Leckerli One";\n    font-size: 64px;\n               /* offset-x | offset-y | blur-radius |      color */\n    text-shadow: -3px        2px         0px         rgba(223, 161, 0, 1);\n    margin-top: 0;\n    margin-bottom: 15px;\n    text-align: start;\n    text-decoration: underline;\n    color: red; \n\n}\n\n.menuItem{\n    display: flex;\n    justify-content: space-between;\n}\n\n.itemName {\n    /*background-color: green;*/\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    padding: 4px;\n}\n\n.itemName:after {\n    content: " ........................................................................................................................................................................................................................................................................................."\n}\n\n.precio {\n    /*background-color: red;*/\n    flex-shrink: 0;\n}\n\n.sectionContainer{\n    margin-bottom: 15px;\n}\n.menuText{\n    color: rgba(255, 0, 0, 1);\n    font-family: 'Bangers', cursive;\n    font-size: 48px;\n    letter-spacing: 5px;\n            /* offset-x | offset-y | blur-radius |      color */\n    text-shadow: -3px        2px         0px         rgba(223, 161, 0, 1);\n}\n\n.itemPrice::before{\n    content: "$";\n}\n\n#contactContainer{\n    /* background-color: blueviolet; */\n}\n\n\n#footer {\n    background-color: #D9D9D9;\n    color: black;\n    margin-bottom: 0;\n    padding: 15px;\n    font-family: 'League Spartan', sans-serif; \n}\n\n.footerLink, .attributionLink{\n    \n    color: black;\n    text-decoration: none;\n    &:hover{\n        color: rgb(46, 46, 46);\n        text-decoration: underline;\n        cursor: pointer;\n    }\n}\n.attributionLink{\n    padding: 5px;\n    margin: 0 auto;\n}\n.attributionsText{\n    font-size: 25px;\n}`,""]);const p=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var r={},i=[],c=0;c<e.length;c++){var s=e[c],d=o.base?s[0]+o.base:s[0],l=r[d]||0,u="".concat(d," ").concat(l);r[d]=l+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=a(m,o);o.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var r=o(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var c=t(r[i]);n[c].references--}for(var s=o(e,a),d=0;d<r.length;d++){var l=t(r[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}r=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},655:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},88:(e,n,t)=>{e.exports=t.p+"f50b9c3ce4bc0f849654.jpg"}},n={};function t(o){var a=n[o];if(void 0!==a)return a.exports;var r=n[o]={id:o,exports:{}};return e[o](r,r.exports,t),r.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&!e;)e=o[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const e=t.p+"dbc922c3a98f7a7addcf.jpg",n=t.p+"087463e4eb785135bd66.jpg",o=t.p+"4e680cc827630d8a61fc.jpg";function a(){const t=document.createElement("div"),a=document.createElement("h1");a.textContent="Tito's Tacos & Tamales",a.classList.add("sectionHeader");const r=document.createElement("div");r.classList.add("card","boxShadow");const i=document.createElement("div");i.classList.add("picContainer");const c=document.createElement("img");c.src=e,c.alt="A picture of tamales rojos",c.classList.add("cardPic"),i.append(c);const s=document.createElement("div");s.classList.add("cardInfo");const d=document.createElement("h2");d.classList.add("cardHeader"),d.textContent="NEWEST ARRIVAL: TAMALES";const l=document.createElement("p");l.classList.add("cardBody"),l.textContent="Here at Tito's Tacos & Tamales, we are proud to offer the best tacos and tamales you've ever tasted! If this is your first time trying a taco or tamal, be warned: we will set the bar so high you will not be able to eat at any other place.",s.append(d,l),r.append(i,s);const u=r.cloneNode(!0),p=r.cloneNode(!0);function m(e){let n=document.createElement("div");return n.textContent=`${e}`,n.classList.add("hours"),n}u.childNodes[0].childNodes[0].src=n,u.childNodes[0].childNodes[0].alt="A picture of the taqueria from the outside",u.childNodes[1].childNodes[0].textContent="PLAN YOUR NEXT VISIT",u.childNodes[1].childNodes[1].textContent="";const f=m("Sunday: 9:00 - 17:00"),h=m("Monday: 7:00 - 23:30"),g=m("Tuesday: 7:00 - 23:30"),x=m("Wednesday: 9:00 - 23:30"),b=m("Thursday: 7:00 - 23:30"),v=m("Friday: 7:00 - 17:00"),y=m("Saturday: 9:00 - 13:00"),E=m("1234 Main Street");E.classList.add("address"),u.childNodes[1].childNodes[1].append(f,h,g,x,b,v,y,E),p.childNodes[0].childNodes[0].src=o,p.childNodes[0].childNodes[0].alt="A picture of a delicious Torta Guajolota",p.childNodes[1].childNodes[0].textContent="“...You have to try the guajolota...”",p.childNodes[1].childNodes[1].textContent='“This was my first time visiting Tito’s Tacos & Tortas, but I’m sure it WONT be my last. The tacos de asada were amazing, but the torta I ordered completely stole the show, you have to try the guajolota!"';const L=document.createElement("p");return L.textContent="-Adalberto Rodríguez, 2023",L.classList.add("alignRight"),p.childNodes[1].appendChild(L),u.classList.add("reverseOrder"),t.append(a,r,u,p),t}const r=t.p+"bb1e081a7cc95c7fb1b5.jpg",i=t.p+"f5afc7fed1beda1b15bd.jpg",c=t.p+"38e28b0d3ede7d45b9c5.jpg";var s=t(88),d=t(379),l=t.n(d),u=t(795),p=t.n(u),m=t(569),f=t.n(m),h=t(565),g=t.n(h),x=t(216),b=t.n(x),v=t(655),y=t.n(v),E=t(426),L={};L.styleTagTransform=y(),L.setAttributes=g(),L.insert=f().bind(null,"head"),L.domAPI=p(),L.insertStyleElement=b(),l()(E.Z,L),E.Z&&E.Z.locals&&E.Z.locals,t.p;const C=document.createElement("div");C.id="navbar",C.classList.add("boxShadow");const w=document.createElement("div");w.id="logo",w.textContent="T's T&T";const k=document.createElement("ul"),A=document.createElement("li");A.textContent="Home";const N=document.createElement("li");N.textContent="Contact";const T=document.createElement("li");T.textContent="Menu",k.id="rightContainer",k.append(A,T,N),C.append(w,k),document.createElement("br");const S=document.querySelector("#container"),I=document.createElement("div");function O(e){I.textContent="",I.append(e)}I.id="content",I.append(a()),A.addEventListener("click",(()=>{console.log("Clicked on Home button"),O(a())})),N.addEventListener("click",(()=>{console.log("Clicked on Contact button"),O(function(){const e=document.createElement("div"),n=document.createElement("h1");n.textContent="Contact Us",n.classList.add("sectionHeader");const t={picture:c,name:"Jane Doe",position:"Manager",phoneNumber:"555-555-5557",email:"manager@example.com"},o={picture:i,name:"John Doe",position:"Delivery",phoneNumber:"555-555-5559",email:"delivery@example.com"};function a(e){const n=document.createElement("div");n.classList.add("contactCard","boxShadow");const t=document.createElement("img");t.classList.add("contactPicture"),t.src=e.picture;const o=document.createElement("div");o.classList.add("contactInfoContainer");const a=document.createElement("div");a.classList.add("contactName"),a.textContent=e.name;const r=document.createElement("div");r.textContent=e.position,r.classList.add("contactInformationText");const i=document.createElement("div");i.textContent=e.phoneNumber,i.classList.add("contactInformationText");const c=document.createElement("div");return c.textContent=e.email,c.classList.add("contactInformationText"),o.append(a,r,i,c),n.append(t,o),n}const s=a({picture:r,name:"ELta Quero",position:"Chef",phoneNumber:"555-555-5554",email:"taquero@example.com"}),d=a(t),l=a(o);return e.append(n,s,d,l),e.id="contactContainer",e}())})),T.addEventListener("click",(()=>{console.log("Clicked on Menu button"),O(function(){const e=document.createElement("div"),n=document.createElement("h1");function t(e){const n=document.createElement("h3");return n.classList.add("menuSection"),n.textContent=e,n}n.textContent="Menu",n.classList.add("sectionHeader");const o=t("Tacos"),a=t("Tortas"),r=t("Newest arrivals!");function i(e,n){const t=document.createElement("div");t.classList.add("menuItem");const o=document.createElement("div");o.classList.add("itemName","menuText"),o.textContent=e;let a=document.createElement("div");return a.classList.add("itemPrice","menuText"),a.textContent=n,t.append(o,a),t}const c=document.createElement("div");c.classList.add("sectionContainer");const s=document.createElement("div");s.classList.add("sectionContainer");const d=document.createElement("div");d.classList.add("sectionContainer");const l=i("BISTECK",2.59),u=i("PASTOR",1.39),p=i("CAMPECHANOS",3.49),m=i("LONGANIZA",2.09),f=i("SUADERO",2.89);c.append(o,l,u,p,m,f);const h=i("GUAJOLOTA",2.61),g=i("CHILAQUILES CON MILANESA",1.49),x=i("AHOGADA",2.49),b=i("PIERNA ADOBADA",1.09),v=i("CEMITA POBLANA",2.85);s.append(a,h,g,x,b,v);const y=i("TAMAL DE CARNE",2.58),E=i("TAMAL DE ELOTE",1.39),L=i("DOGO SONORENSE",3.87),C=i("COCA-COLA MEXICANA",2.09),w=i("UVOLA",1.89);return d.append(r,y,E,L,C,w),e.append(n,c,s,d),e.id="contactContainer",e}())})),S.append(C),S.append(I),S.append(function(){const e=document.createElement("div");e.id="footer";const n=document.createElement("div"),t=document.createElement("br"),o=document.createElement("br"),a=document.createElement("a");a.href="https://github.com/rafaelencinasr/restaurant",a.target="_blank",a.textContent="Rafael Encinas 2023©",a.classList.add("footerLink");const r=document.createElement("a");r.href="https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page",r.target="_blank",r.textContent="Original project specifications: theodinproject.com",r.classList.add("footerLink");const i=document.createElement("a");return i.id="attributionsLink",i.href="#navbar",i.textContent="Assets attributions",i.classList.add("footerLink"),n.append(a,t,r),n.append(o,i),e.append(n),e}()),document.querySelector("#attributionsLink").addEventListener("click",(()=>{console.log("Attributions link clicked"),O(function(){const t=document.createElement("div"),a=document.createElement("h1");a.textContent="Assets Attributions",a.classList.add("sectionHeader");const d={picture:e,name:"IMAGE BY FREEPIK",referenceLink:"https://www.freepik.com/free-photo/assortment-delicious-traditional-tamales_15458297.htm"},l={picture:n,name:"Evan Caplan/For Eater D.C.",referenceLink:"https://dc.eater.com/2021/3/5/22312015/taqueira-al-lado-opening-tacos-al-volo-next-door-adams-morgan-dc"},u={picture:o,name:"Ukaizen, CC BY-SA 4.0, via Wikimedia Commons",referenceLink:"https://commons.wikimedia.org/wiki/File:Guajolota.jpg"},p={picture:r,name:"IMAGE BY FREEPIK",referenceLink:"https://www.freepik.com/free-photo/portrait-man-laughing_12478216.htm#query=profile&position=0&from_view=search&track=sph"},m={picture:c,name:"Image by drobotdean on Freekpik",referenceLink:"https://www.freepik.com/free-photo/portrait-smiling-girl-standing_6781936.htm#query=profile&position=7&from_view=search&track=sph"},f={picture:i,name:"Image by mego-studio on Freekpik",referenceLink:"https://www.freepik.com/free-photo/portrait-young-happy-man-smiling-against-white-space_10935504.htm#query=profile&position=8&from_view=search&track=sph"};function h(e){const n=document.createElement("div");n.classList.add("contactCard","boxShadow");const t=document.createElement("img");t.classList.add("contactPicture"),t.src=e.picture;const o=document.createElement("a");o.classList.add("contactInfoContainer","attributionLink"),o.href=e.referenceLink,o.target="_blank";const a=document.createElement("div");return a.classList.add("contactName","attributionsText"),a.textContent=e.name,o.append(a),n.append(t,o),n}const g=h({picture:s,name:"Interior Wall Vectors by Vecteezy",referenceLink:"https://www.vecteezy.com/free-vector/interior-wall"}),x=h(d),b=h(l),v=h(u),y=h(p),E=h(m),L=h(f);return t.append(a,g,x,b,v,y,E,L),t.id="contactContainer",t}())}))})()})();