"use strict"

const imageArray = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg']

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * imageArray.length)

    const selectedImage = imageArray[randomIndex]

    document.getElementById('randomImage').src = `./images/${selectedImage}`
}
getRandomImage()