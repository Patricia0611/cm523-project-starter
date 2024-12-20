// Wait for the DOM to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function () {
    // Select all elements with the class 'header'
    const headers = document.querySelectorAll('.header');

    // Select all elements with the class 'detail'
    const details = document.querySelectorAll('.detail');

    // Loop through each header element and add a click event listener
    headers.forEach(header => {
        header.addEventListener('click', function () {
            // Get the target detail's ID from the 'data-detail' attribute of the clicked header
            //source: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
            const targetDetailId = this.dataset.detail;

            // Remove the 'active' class from all detail elements
            //source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach; https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
            details.forEach(detail => {
                detail.classList.remove('active');
            });

            // Find the target detail element by its ID
            const targetDetail = document.getElementById(targetDetailId);
            if (targetDetail) {
                // Add the 'active' class to the target detail element
                targetDetail.classList.add('active');
            }
        });
    });
});



// Select the button element with the class "stop"
const button = document.querySelector('.stop');

// Select the div container where the background content will be displayed
const backgroundDiv = document.querySelector('.background');

// Define an array of background configurations
const backgrounds = [
    {
        // Script source for the Spline Viewer module
        scriptSrc: "https://unpkg.com/@splinetool/viewer@1.9.48/build/spline-viewer.js",
        // URL of the 3D scene to load in the Spline Viewer
        viewerUrl: "https://prod.spline.design/9BtprdUaUNvJTidV/scene.splinecode"
    },
    {
        // Script source for another version of the Spline Viewer module
        scriptSrc: "https://unpkg.com/@splinetool/viewer@1.9.48/build/spline-viewer.js",
        // URL of the second 3D scene to load in the Spline Viewer
        viewerUrl: "https://prod.spline.design/kzdnOJwZSpiDbth1/scene.splinecode"
    }
];

// Initialize the current index to track which background is currently displayed
let currentIndex = 0;

// Add a click event listener to the button
button.addEventListener('click', () => {
    // Increment the current index and loop back to 0 if it exceeds the array length
    currentIndex = (currentIndex + 1) % backgrounds.length;
    //In let currentIndex = 0; currentIndex = (currentIndex + 1) % backgrounds.length; currentIndex + 1: Increases the current index by 1. % backgrounds.length: Ensures currentIndex stays within the valid array range, looping back to 0 if it exceeds the last index.
    //Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators 
    
    // Clear the current content inside the background container
    backgroundDiv.innerHTML = '';

    // Dynamically create a new <script> element for the Spline Viewer module
    const script = document.createElement('script');
    script.type = 'module'; // Specify the script type as a module
    script.src = backgrounds[currentIndex].scriptSrc; // Set the source of the script to the current background's script source

    // Dynamically create a new <spline-viewer> element for the 3D scene
    const viewer = document.createElement('spline-viewer');
    viewer.setAttribute('url', backgrounds[currentIndex].viewerUrl); // Set the URL of the 3D scene

    // Append the new <script> element to the background container
    backgroundDiv.appendChild(script);

    // Append the new <spline-viewer> element to the background container
    backgroundDiv.appendChild(viewer);
});




