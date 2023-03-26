// list of all the images
const images = document.querySelectorAll(".image");

// on all the images...
images.forEach(image => {
    // listen for click events
    image.addEventListener('click', () => {
        // if an image was clicked, add the spin-image class to it
        // triggering the animation
        image.classList.add('spin-image');
    });

    // listen for animations ending
    image.addEventListener('animationend', () => {
        // remove the spin-image class from the image so that it
        // can be re-applied if clicked again. otherwise it would only be able
        // to play the animation once
        image.classList.remove('spin-image');
    });
});
