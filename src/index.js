import createRestaurantHomePage from './pageLoad';
import openMenu from './menu';
import createRestaurantAboutPage from './about';

openPage();

const menuButton = document.querySelector("#menu");
startButton.addEventListener("click", () => {
    openMenu();
})

const homeButton = document.querySelector("#home");
startButton.addEventListener("click", () => {
    createRestaurantHomePage();
})

const aboutButton = document.querySelector("about");
startButton.addEventListener("click", () => {
    createRestaurantAboutPage();
})