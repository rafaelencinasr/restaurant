function menu(){
    const content = document.createElement("div");

    const header = document.createElement("h1");
    header.textContent = "Menu";
    header.classList.add("sectionHeader");


    const menuBody = document.createElement("h4");
    menuBody.textContent = "Tacos";
/*
    const ownerInfo = document.createElement("p");
    ownerInfo.textContent = 
    `Owner
    555-555-5554
    example@example.com
    `;
*/
    content.append(header, menuBody);
    content.id = "contactContainer" 

    return content;
    
}

export {menu};
