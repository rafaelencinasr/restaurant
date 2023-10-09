import tamales from './tamales.jpg';
import taqueria from './taqueria.jpg';
import guajolota from './guajolota.jpg';

function home(){
    const content = document.createElement("div");

    //header
    const header = document.createElement("h1");
    header.textContent = "Tito's Tacos & Tamales";
    header.classList.add("sectionHeader"); 

    //card1 container
    const card1 = document.createElement("div");
    card1.classList.add("card", "boxShadow");

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

  card1.append(picContainer, tamalesInfo);

    
    // Clone nodes all to content
    const card2 = card1.cloneNode(true);
    const card3 = card1.cloneNode(true);

    
    //Modify card2 and card3
    //Card2 pic
    card2.childNodes[0].childNodes[0].src = taqueria;
    card2.childNodes[0].childNodes[0].alt = "A picture of the taqueria from the outside";
    
    //Card2 info
    card2.childNodes[1].childNodes[0].textContent = "PLAN YOUR NEXT VISIT";
    card2.childNodes[1].childNodes[1].textContent = "";

    function hoursGenerator(dayHours){
        let hours = document.createElement("div");
        hours.textContent = `${dayHours}`;
        hours.classList.add("hours")

        return hours;
    }
    const sundayHours = hoursGenerator("Sunday: 9:00 - 17:00");
    const mondayHours = hoursGenerator("Monday: 7:00 - 23:30");
    const tuesdayHours = hoursGenerator("Tuesday: 7:00 - 23:30");
    const wednesdayHours = hoursGenerator("Wednesday: 9:00 - 23:30");
    const thursdayHours = hoursGenerator("Thursday: 7:00 - 23:30");
    const fridayHours = hoursGenerator("Friday: 7:00 - 17:00");
    const saturdayHours = hoursGenerator("Saturday: 9:00 - 13:00");
    const taqueriaAddress = hoursGenerator("1234 Main Street");
    taqueriaAddress.classList.add("address");

    card2.childNodes[1].childNodes[1].append(sundayHours, mondayHours, tuesdayHours, wednesdayHours, thursdayHours, fridayHours, saturdayHours, taqueriaAddress);

    //Card3 pic
    card3.childNodes[0].childNodes[0].src = guajolota;
    card3.childNodes[0].childNodes[0].alt = "A picture of a delicious Torta Guajolota";
      
    //Card3 info
    card3.childNodes[1].childNodes[0].textContent = '“...You have to try the guajolota...”';
    card3.childNodes[1].childNodes[1].textContent = '“This was my first time visiting Tito’s Tacos & Tortas, but I’m sure it WONT be my last. The tacos de asada were amazing, but the torta I ordered completely stole the show, you have to try the guajolota!"';

    const quote = document.createElement("p");
    quote.textContent = "-Adalberto Rodríguez, 2023";
    quote.classList.add("alignRight");

    card3.childNodes[1].appendChild(quote);
    
    card2.classList.add("reverseOrder");

    content.append(header, card1, card2, card3);

    return content;

}

export {home};