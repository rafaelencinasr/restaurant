function menu(){
    const content = document.createElement("div");

    const header = document.createElement("h1");
    header.textContent = "Menu";
    header.classList.add("sectionHeader");


    
    function menuSectionGenerator(name){
        const sectionTitle = document.createElement("h3");
        sectionTitle.classList.add("menuSection")
        sectionTitle.textContent = name;

        return sectionTitle;
        
    }
    
    /* const tacosTitle = document.createElement("h3");
    tacosTitle.classList.add("menuSection")
    tacosTitle.textContent = "Tacos"; */

    const tacosTitle = menuSectionGenerator("Tacos");
    const tortasTitle = menuSectionGenerator("Tortas");
    const newestArrivalsTitle = menuSectionGenerator("Newest arrivals!");
    
    function menuItemGenerator(name, price){

        const menuItemContainer = document.createElement("div");
        menuItemContainer.classList.add("menuItem");
    
        const itemName = document.createElement("div");
        itemName.classList.add("itemName","menuText");
        itemName.textContent = name;
    
        let itemPrice = document.createElement("div");
        itemPrice.classList.add("itemPrice","menuText");
        itemPrice.textContent = price;
    
        menuItemContainer.append(itemName, itemPrice)

        return menuItemContainer;
    }

    const tacosContainer = document.createElement("div");
    tacosContainer.classList.add("sectionContainer")
    const tortasContainer = document.createElement("div");
    tortasContainer.classList.add("sectionContainer");
    const newestContainer = document.createElement("div");
    newestContainer.classList.add("sectionContainer");

    
    const bisteck = menuItemGenerator("BISTECK", 2.59);
    const pastor = menuItemGenerator("PASTOR", 1.39);
    const campechanos = menuItemGenerator("CAMPECHANOS", 3.49);
    const longaniza = menuItemGenerator("LONGANIZA", 2.09);
    const suadero = menuItemGenerator("SUADERO", 2.89);

    tacosContainer.append(  tacosTitle,
        bisteck,
        pastor,
        campechanos,
        longaniza,
        suadero);

    const guajolota = menuItemGenerator("GUAJOLOTA", 2.61);
    const chilaquiles = menuItemGenerator("CHILAQUILES CON MILANESA", 1.49);
    const ahogada = menuItemGenerator("AHOGADA", 2.49);
    const pierna = menuItemGenerator("PIERNA ADOBADA", 1.09);
    const cemita = menuItemGenerator("CEMITA POBLANA", 2.85);

    tortasContainer.append( tortasTitle,
                            guajolota,
                            chilaquiles,
                            ahogada,
                            pierna,
                            cemita
                        )

    const tamalCarne = menuItemGenerator("TAMAL DE CARNE", 2.58);
    const tamalElote = menuItemGenerator("TAMAL DE ELOTE", 1.39);
    const dogo = menuItemGenerator("DOGO SONORENSE", 3.87);
    const cocacola = menuItemGenerator("COCA-COLA MEXICANA", 2.09);
    const uvola = menuItemGenerator("UVOLA", 1.89);

    newestContainer.append( newestArrivalsTitle,
                            tamalCarne,
                            tamalElote,
                            dogo,
                            cocacola,
                            uvola);

    content.append( header, tacosContainer, tortasContainer, newestContainer);
    content.id = "contactContainer" 

    return content;
    
}

export {menu};
