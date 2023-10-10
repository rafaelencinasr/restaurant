import taquero from './taquero.jpg'

function contact(){
    const content = document.createElement("div");

    const header = document.createElement("h1");
    header.textContent = "Contact Us";
    header.classList.add("sectionHeader");


   const contactCard = document.createElement("div");
   contactCard.classList.add("contactCard");

   const contactPicture = document.createElement("img");
   contactPicture.classList.add("contactPicture");
   contactPicture.src = taquero;

   const contactInfoContainer = document.createElement("div");
   contactInfoContainer.classList.add("contactInfoContainer");
   
   const contactName = document.createElement("div");
   contactName.classList.add("contactName");
   contactName.textContent = "ELTA QUERO";

   const contactPosition = document.createElement("div");
   contactPosition.textContent = "Chef";
   contactPosition.classList.add("contactInformationText");

   const contactNumber = document.createElement("div");
   contactNumber.textContent = "555-555-5554";
   contactNumber.classList.add("contactInformationText");

   const contactEmail = document.createElement("div");
   contactEmail.textContent = "taquero@example.com";
   contactEmail.classList.add("contactInformationText");

   contactInfoContainer.append(contactName, contactPosition, contactNumber, contactEmail);

   
   contactCard.append(contactPicture, contactInfoContainer);


    content.append(header, contactCard);
    content.id = "contactContainer" 

    return content;
    
}

export {contact};

