const circle = document.getElementById('circle');

// Generate random number
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// move circle to random position
function moveCircle() {
    // create random diameter
    const newDiameter = getRandomInt(10, 50);

    // set new circle diameter
    circle.style.width = `${newDiameter}px`;
    circle.style.height = `${newDiameter}px`;

    // new random position
    const maxX = window.innerWidth - newDiameter;
    const maxY = window.innerHeight - newDiameter;

    const randomX = getRandomInt(0, maxX);
    const randomY = getRandomInt(0, maxY);

    // set position of new circle
    circle.style.left = `${randomX}px`;
    circle.style.top = `${randomY}px`;
}

// add click event listener 
circle.addEventListener('click', moveCircle);

// initial circle position on page load
moveCircle();