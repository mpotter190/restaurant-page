const createRestaurantMenuPage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    //create and append headline element
    const headline = document.createElement('h1');
    headline.textContent = "Dinner Menu";
    pageContent.appendChild(headline);

    //create and append menu items
    const item1 = document.createElement('p');
    item1.textContent = "Screams $9.50"
    pageContent.appendChild(item1);
    content.appendChild(pageContent);

    const item2 = document.createElement('p');
    item2.textContent = "Void $12.99"
    pageContent.appendChild(item1);
    content.appendChild(pageContent);

    const item3 = document.createElement('p');
    item3.textContent = "Misery 23.50"
    pageContent.appendChild(item1);
    content.appendChild(pageContent);
}

export default createRestaurantMenuPage;