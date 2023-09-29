function navbar(){
     //Navbar
    const navbar = document.createElement("div");
    navbar.id = "navbar";

    const homeTab = document.createElement("button");
    homeTab.textContent="Home";
    
    const menuTab = document.createElement("button");
    menuTab.textContent="Menu";

    const contactTab = document.createElement("button");
    contactTab.textContent="Contact";


    navbar.append(homeTab, menuTab, contactTab);

    homeTab.addEventListener("click", ()=>{
        console.log("Clicked on Home button");

    })

    contactTab.addEventListener("click", ()=>{
        console.log("Clicked on Contact button");

    })
    
    menuTab.addEventListener("click", ()=>{
        console.log("Clicked on Menu button");

    })

    return navbar;
}

export {navbar};