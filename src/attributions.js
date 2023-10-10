import backgroundPic from './background.jpg';
import tamalesPic from './tamales.jpg'
import taqueriaPic from './taqueria.jpg'
import guajolotaPic from './guajolota.jpg'
import taqueroPic from './taquero.jpg';
import johnDoePic from './johndoe.jpg';
import janeDoePic from './janedoe.jpg';  

function attributions(){
    const content = document.createElement("div");

    const header = document.createElement("h1");
    header.textContent = "Assets Attributions";
    header.classList.add("sectionHeader");

    
    const background = {
        picture: backgroundPic,
        name: "Interior Wall Vectors by Vecteezy",
        referenceLink: "https://www.vecteezy.com/free-vector/interior-wall",
    }

    const tamales = {
        picture: tamalesPic,
        name: "IMAGE BY FREEPIK",
        referenceLink: "https://www.freepik.com/free-photo/assortment-delicious-traditional-tamales_15458297.htm",
    }

    const taqueria = {
        picture: taqueriaPic,
        name: "Evan Caplan/For Eater D.C.",
        referenceLink: "https://dc.eater.com/2021/3/5/22312015/taqueira-al-lado-opening-tacos-al-volo-next-door-adams-morgan-dc",
    }

    const guajolota = {
        picture: guajolotaPic,
        name: "Ukaizen, CC BY-SA 4.0, via Wikimedia Commons",
        referenceLink: "https://commons.wikimedia.org/wiki/File:Guajolota.jpg",
    }

    const taquero = {
        picture: taqueroPic,
        name: "IMAGE BY FREEPIK",
        referenceLink: "https://www.freepik.com/free-photo/portrait-man-laughing_12478216.htm#query=profile&position=0&from_view=search&track=sph",
    }

    const janeDoe = {
        picture: janeDoePic,
        name: "Image by drobotdean on Freekpik",
        referenceLink: "https://www.freepik.com/free-photo/portrait-smiling-girl-standing_6781936.htm#query=profile&position=7&from_view=search&track=sph",
    }

    const johnDoe = {
        picture: johnDoePic,
        name: "Image by mego-studio on Freekpik",
        referenceLink: "https://www.freepik.com/free-photo/portrait-young-happy-man-smiling-against-white-space_10935504.htm#query=profile&position=8&from_view=search&track=sph",
    }

    function attributionsCardGenerator(person){
        const contactCard = document.createElement("div");
        contactCard.classList.add("contactCard", "boxShadow");
     
        const contactPicture = document.createElement("img");
        contactPicture.classList.add("contactPicture");
        contactPicture.src = person.picture;
     
        const contactInfoContainer = document.createElement("a");
        contactInfoContainer.classList.add("contactInfoContainer", "attributionLink");
        contactInfoContainer.href = person.referenceLink;
        contactInfoContainer.target = "_blank"; 
        
        const contactName = document.createElement("div");
        contactName.classList.add("contactName", "attributionsText");
        contactName.textContent = person.name;
     
        contactInfoContainer.append(contactName);
     
        contactCard.append(contactPicture, contactInfoContainer);

        return contactCard;
        
    }

    // Possible optimization: save contact objects to an array, append each array position 
    // to a container node, and then append that container to general content container 

    const backgroundCard = attributionsCardGenerator(background);
    const tamalesCard = attributionsCardGenerator(tamales);
    const taqueriaCard = attributionsCardGenerator(taqueria);
    const guajolotaCard = attributionsCardGenerator(guajolota);
    const taqueroCard = attributionsCardGenerator(taquero);
    const janeDoeCard = attributionsCardGenerator(janeDoe);
    const johnDoeCard = attributionsCardGenerator(johnDoe);


    content.append(header, backgroundCard, tamalesCard, taqueriaCard, guajolotaCard, taqueroCard, janeDoeCard, johnDoeCard);
    content.id = "contactContainer" 

    return content;
    
}

export {attributions};

