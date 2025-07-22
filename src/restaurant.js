//restaurant.js

const createRestaurantHomePage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    //create and append image element
    const image = document.createElement('img');
    image.src = 'img.jpg';
    image.height = '300'
    pageContent.appendChild(image);

    //create and append headline element
    const headline = document.createElement('h1');
    headline.textContent = "Welcome to Maddie's Restaurant!";
    pageContent.appendChild(headline);

    //create and append desc element
    const desc = document.createElement('p');
    desc.textContent = "Welcome to Maddie's Restaurant-where we make absolutely nothing at all. Come here if you don't want to eat."
    pageContent.appendChild(desc);
    content.appendChild(pageContent);
}

export default createRestaurantHomePage