const createRestaurantAboutPage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    //create and append headline element
    const headline = document.createElement('h1');
    headline.textContent = "About Us!";
    pageContent.appendChild(headline);

    //create and append desc element
    const desc = document.createElement('p');
    desc.textContent = "We do nothing here, we eat nothing here, we merely exist."
    pageContent.appendChild(desc);
    content.appendChild(pageContent);
}

export default createRestaurantAboutPage;