import tamales from './tamales.jpg';

function home(){
    const content = document.createElement("div");

    //header
    const header = document.createElement("h1");
    header.textContent = "Tito's Tacos & Tamales";
    header.classList.add("sectionHeader"); 

    //card container
    const card = document.createElement("div");
    card.classList.add("card", "boxShadow");

    const picContainer = document.createElement("div");
    picContainer.classList.add("picContainer");
    
    const tamalesPic = document.createElement("img");
    tamalesPic.src = tamales;
    tamalesPic.alt = "A picture of tamales rojos";
    tamalesPic.classList.add("cardPic");
    
    picContainer.append(tamalesPic)

    const tamalesInfo = document.createElement("div");
    tamalesInfo.classList.add("cardInfo");

    const tamalesHeader = document.createElement("h2");
    tamalesHeader.classList.add("cardHeader");
    tamalesHeader.textContent = "NEWEST ARRIVAL: TAMALES"

    const tamalesBody = document.createElement("p");
    tamalesBody.classList.add("cardBody");
    tamalesBody.textContent = "Here at Tito's Tacos & Tamales, we are proud to offer the best tacos and tamales you've ever tasted! If this is your first time trying a taco or tamal, be warned: we will set the bar so high you will not be able to eat at any other place.";
    tamalesInfo.append(tamalesHeader, tamalesBody);


    card.append(picContainer,tamalesInfo);

    
    // Append all to content
    const testCard1 = card.cloneNode(true);
    const testCard2 = card.cloneNode(true);

    content.append(header, card, testCard1, testCard2);

    return content;

}

export {home};