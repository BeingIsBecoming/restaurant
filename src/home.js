export default function loadHome() {
    const div = document.createElement('div');
    div.innerHTML =
    `<h2> WELCOME </h2>
    <p>... but don't let the door hit ya on the way out! </p>`;
    
    return div;
}