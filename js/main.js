/* global data */
/* exported data */
var photoInput = document.querySelector('#photo');
var mainImage = document.querySelector('#mainImage');
photoInput.addEventListener('input', addPhoto);

function addPhoto(event) {
  mainImage.setAttribute('src', photoInput.value);
}

var form = document.querySelector('form');
var titleInput = document.querySelector('#title');
var notesInput = document.querySelector('#notes');

form.addEventListener('submit', submitForm);
function submitForm(event) {
  event.preventDefault();
  var entry = {};
  entry.title = titleInput.value;
  entry.photo = photoInput.value;
  entry.notes = notesInput.value;
  entry.entryId = data.nextEntryId;
  data.nextEntryId++;
  form.reset();
  mainImage.setAttribute('src', 'images/placeholder-image-square.jpg');
  data.entries.unshift(entry);
}
