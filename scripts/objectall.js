// Add a click event listener to the element with ID 'thorn'
document.getElementById('thorn').addEventListener('click', function () {
    const thorn = document.getElementById('thorn'); // The main thorn container
    const objectContainer = document.querySelector('.object'); // The container for the anxiety object
    const message = document.getElementById('message'); // The message displayed after shattering

    // Get the bounding rectangle of the thorn element
    //source: https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    const { width, height } = thorn.getBoundingClientRect();

    // Loop to create 15 fragments for the shattering effect
    for (let i = 0; i < 15; i++) {
        const fragment = document.createElement('div'); // Create a new div for each fragment
        fragment.classList.add('fragment'); // Add the 'fragment' class for styling and animation
        //source: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

        // Generate a random color for the fragment
        //source: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl
        //source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
        //source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
        const randomColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
        //CSS custom properties are defined using --
        //source: https://developer.mozilla.org/en-US/docs/Web/CSS/--*
        //Syntax: element.style.setProperty(propertyName, value, priority)
        //source: https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty
        fragment.style.setProperty('--color', randomColor);

        // Set random movement directions and rotation for each fragment
        //soure: https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty
        //The style.setProperty() method is used here to dynamically assign values to CSS custom properties (--x, --y, --angle, --rand1, etc.). These custom properties are later used in the CSS for styling and animations.
        
        fragment.style.setProperty('--x', Math.random() - 0.5); // Random horizontal direction
        fragment.style.setProperty('--y', Math.random() - 0.5); // Random vertical direction
        fragment.style.setProperty('--angle', Math.random()); // Random rotation angle

        // Set random polygon clipping adjustments for the fragment shape
        //source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
        //Math.random() generates a number between 0 and 1. To create custom ranges: Math.random() * 20 - 10 generates a value between -10 and 10. fragment.style.setProperty('--rand1', `${Math.random() * 20 - 10}%`);
        //source: https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes
        fragment.style.setProperty('--rand2', `${Math.random() * 20 - 10}%`);
        fragment.style.setProperty('--rand3', `${Math.random() * 20 - 10}%`);
        fragment.style.setProperty('--rand4', `${Math.random() * 20 - 10}%`);
        fragment.style.setProperty('--rand5', `${Math.random() * 20 - 10}%`);
        fragment.style.setProperty('--rand6', `${Math.random() * 20 - 10}%`);

        // Position each fragment at the center of the thorn container
        //source: https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning
        //The style.top and style.left properties are used to position each fragment at the center of the container (thorn) for the animation to originate from the same point.
        //source: https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
        //The getBoundingClientRect() method is used to calculate the container's dimensions (width, height).
        fragment.style.top = `${height / 2 - 40}px`; // Center vertically
        fragment.style.left = `${width / 2 - 40}px`; // Center horizontally

        // Append the fragment to the thorn container
        thorn.appendChild(fragment);
    }

    // Hide the object container (anxiety object) after the click
    //source: https://developer.mozilla.org/en-US/docs/Web/CSS/transition
    if (objectContainer) {
        objectContainer.style.opacity = '0'; // Fade out the object
        objectContainer.style.visibility = 'hidden'; // Hide it from the view
        objectContainer.style.transition = 'opacity 0.5s ease, visibility 0.5s ease'; // Smooth transition effect
    }

    // Delay to show the message after the shattering animation is complete
    //source: https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout
    setTimeout(() => {
        message.style.opacity = '1'; // Fade in the message
        message.style.visibility = 'visible'; // Make the message visible
        message.style.transition = 'opacity 0.5s ease, visibility 0.5s ease'; // Smooth transition effect
    }, 1500); // Wait 1.5 seconds before showing the message
});
