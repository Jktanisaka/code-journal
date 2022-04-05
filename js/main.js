/* global data */
/* exported data */
var photoInput = document.querySelector('#photo');
var mainImage = document.querySelector('#mainImage');
photoInput.addEventListener('input', addPhoto);

function addPhoto(event) {
  mainImage.setAttribute('src', photoInput.value);
}
