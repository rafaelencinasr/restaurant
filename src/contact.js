import taquero from './taquero.jpg';
import johnDoePic from './johndoe.jpg';
import janeDoePic from './janedoe.jpg';

function contact(){
    const content = document.createElement("div");

    const header = document.createElement("h1");
    header.textContent = "Contact Us";
    header.classList.add("sectionHeader");

    
    const eltaquero = {
        picture: taquero,
        name: "ELta Quero",
        position: "Chef",
        phoneNumber: "555-555-5554",
        email: "taquero@example.com"
    }

   const janeDoe = {
        picture: janeDoePic,
        name: "Jane Doe",
        position: "Manager",
        phoneNumber: "555-555-5557",
        email: "manager@example.com"
   };

   const johnDoe = {
        picture: johnDoePic,
        name: "John Doe",
        position: "Delivery",
        phoneNumber: "555-555-5559",
        email: "delivery@example.com"
        };

    function contactCardGenerator(person){
        const contactCard = document.createElement("div");
        contactCard.classList.add("contactCard", "boxShadow");
     
        const contactPicture = document.createElement("img");
        contactPicture.classList.add("contactPicture");
        contactPicture.src = person.picture;
     
        const contactInfoContainer = document.createElement("div");
        contactInfoContainer.classList.add("contactInfoContainer");
        
        const contactName = document.createElement("div");
        contactName.classList.add("contactName");
        contactName.textContent = person.name;
     
        const contactPosition = document.createElement("div");
        contactPosition.textContent = person.position;
        contactPosition.classList.add("contactInformationText");
     
        const contactNumber = document.createElement("div");
        contactNumber.textContent = person.phoneNumber;
        contactNumber.classList.add("contactInformationText");
     
        const contactEmail = document.createElement("div");
        contactEmail.textContent = person.email;
        contactEmail.classList.add("contactInformationText");
     
        contactInfoContainer.append(contactName, contactPosition, contactNumber, contactEmail);
     
        contactCard.append(contactPicture, contactInfoContainer);

        return contactCard;
        
    }

    // Possible optimization: save contact objects to an array, append each array position 
    // to a container node, and then append that container to general content container 

   const taqueroCard = contactCardGenerator(eltaquero);
   const janeDoeCard = contactCardGenerator(janeDoe);
   const johnDoeCard = contactCardGenerator(johnDoe);


    content.append(header, taqueroCard, janeDoeCard, johnDoeCard);
    content.id = "contactContainer" 

    return content;
    
}

export {contact};

