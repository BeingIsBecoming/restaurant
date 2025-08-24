import "./styles.css";
import { greeting } from "./greeting.js";
import somaImage from "./soma.png";

const image = document.createElement("img");
image.src = somaImage;

document.body.appendChild(image);

console.log(greeting);