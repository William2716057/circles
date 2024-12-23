function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Move the clickable circle to random position and size
function moveCircle() {
    const newDiameter = getRandomInt(10, 50);
    circle.style.width = `${newDiameter}px`;
    circle.style.height = `${newDiameter}px`;

    const maxX = window.innerWidth - newDiameter;
    const maxY = window.innerHeight - newDiameter;

    const randomX = getRandomInt(0, maxX);
    const randomY = getRandomInt(0, maxY);

    circle.style.left = `${randomX}px`;
    circle.style.top = `${randomY}px`;
}

// Create a random circle element and append
function createRandomCircle() {
    const newCircle = document.createElement('div');  // Create new <div> element
    const diameter = getRandomInt(10, 50);  
    const randomX = getRandomInt(0, window.innerWidth - diameter);
    const randomY = getRandomInt(0, window.innerHeight - diameter);

    // Set styles for 
    newCircle.style.width = `${diameter}px`;
    newCircle.style.height = `${diameter}px`;
    newCircle.style.position = 'absolute';
    newCircle.style.borderRadius = '50%';  // fix
    newCircle.style.backgroundColor = '#3498db';  // fix
    newCircle.style.left = `${randomX}px`;
    newCircle.style.top = `${randomY}px`;

    // Append the new circle 
    document.body.appendChild(newCircle);
}

function triggerWipe() {
    const wipeElement = document.createElement('div');
    wipeElement.classList.add('wipe'); // Add class that contains  animation

    // Set position of wipe element to match circle position
    const rect = circle.getBoundingClientRect();
    wipeElement.style.left = `${rect.left - 25}px`;  // Center wipe over circle
    wipeElement.style.top = `${rect.top - 25}px`;

    // Append the wipe element to body
    document.body.appendChild(wipeElement);

    // Remove the wipe element after animation
    wipeElement.addEventListener('animationend', () => {
        wipeElement.remove();
    });
}

circle.addEventListener('click', () => {
    moveCircle();
    triggerWipe();  // Trigger wipe animation
});

// Add click event listener 
circle.addEventListener('click', moveCircle);

// Initial positions on page load
window.addEventListener('load', () => {
    moveCircle();  // Position clickable circle

    // create random circles given number of times
    for (let i = 0; i < 5; i++) {
        createRandomCircle();  
    }
});

