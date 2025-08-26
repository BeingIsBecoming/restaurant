import "./styles.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadMerch from "./merch.js";
import loadAbout from "./about.js";
import loadContact from "./contact.js";

document.querySelector('nav').addEventListener('click', (e) => {
    if (e.target.textContent === 'Home') {
        document.getElementById('content').innerHTML = '';
        document.getElementById('content').appendChild(loadHome());
    }
    if (e.target.textContent === 'Menu') {
        document.getElementById('content').innerHTML = '';
        document.getElementById('content').appendChild(loadMenu());
    }
    if (e.target.textContent === 'Merch') {
        document.getElementById('content').innerHTML = '';
        document.getElementById('content').appendChild(loadMerch());
    }
    if (e.target.textContent === 'About') {
        document.getElementById('content').innerHTML = '';
        document.getElementById('content').appendChild(loadAbout());
    }
    if (e.target.textContent === 'Contact') {
        document.getElementById('content').innerHTML = '';
        document.getElementById('content').appendChild(loadContact());
    }
});

document.getElementById('content').innerHTML = '';
document.getElementById('content').appendChild(loadHome());
console.log("That's not labubu, that's MY booboo...");


// const image = document.createElement("img");
// image.src = somaImage;

// document.body.appendChild(image);