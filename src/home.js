function header(){
    const header = document.createElement("h1");
    header.textContent = "Tito's Tacos & Tamales"; 
    
    return header;
}

function coverPic(src){
    const coverPic = document.createElement("img");

    coverPic.src = src;
    coverPic.alt = "A picture of tortas, tacos, and tamales";
    coverPic.classList.add("coverPic")

    return coverPic;
}

function paragraph(){
    const paragraph = document.createElement("p");
    paragraph.textContent = "Here at Tito's Tacos & Tamales, we are proud to offer the best tacos and tamales you've ever tasted! If this is your first time trying a taco or tamal, be warned: we will set the bar so high you will not be able to eat at any other place.";
    return paragraph;
}

export  {header, coverPic, paragraph};