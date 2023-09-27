function contact(){
    const content = document.createElement("div");

    const header = document.createElement("h1");
    header.textContent = "Contact Us";


    const contactOwner = document.createElement("h4");
    contactOwner.textContent = "Mr. Owen Owner";
    
    const ownerInfo = document.createElement("p");
    ownerInfo.textContent = 
    `Owner
    555-555-5554
    example@example.com
    `;

    content.append(header, contactOwner, ownerInfo);
    content.id = "contactContainer" 

    return content;
    
}

export {contact};

