const images = document.querySelectorAll(".image");

images.forEach(image => {
    image.addEventListener('click', (e) => {
        image.classList.add('spin-image')
    })
})
