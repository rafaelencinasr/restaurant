function footer(){
    const footer = document.createElement("div");
    footer.id = "footer";

    const footerCopyright = document.createElement("div")

    const breakLine = document.createElement("br");
    const breakLine2 = document.createElement("br");

    const repositoryLink = document.createElement("a");
    repositoryLink.href = "https://github.com/rafaelencinasr/restaurant";
    repositoryLink.target = "_blank";
    repositoryLink.textContent = "Rafael Encinas 2023©";
    repositoryLink.classList.add("footerLink");

    const projectLink = document.createElement("a");
    projectLink.href = "https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page#solutions";
    projectLink.target = "_blank";
    projectLink.textContent = "Original project specifications: theodinproject.com";
    projectLink.classList.add("footerLink");

    const attributionsLink = document.createElement("a");
    attributionsLink.href = "https://www.google.com/";
    attributionsLink.target = "_blank";
    attributionsLink.textContent = "Assets attributions";
    attributionsLink.classList.add("footerLink");

    footerCopyright.append(repositoryLink, breakLine, projectLink);
    footerCopyright.append(breakLine2, attributionsLink);

    footer.append(footerCopyright);

    return footer;
}

export {footer};