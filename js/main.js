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
  if (data.editing === null) {
    var entry = {};
    entry.title = titleInput.value;
    entry.photo = photoInput.value;
    entry.notes = notesInput.value;
    entry.entryId = data.nextEntryId;
    data.nextEntryId++;
    form.reset();
    mainImage.setAttribute('src', 'images/placeholder-image-square.jpg');
    data.entries.unshift(entry);
    ul.prepend(createEntry(entry));
  } else {
    var liElements = document.querySelectorAll('li');
    for (var i = 0; i < data.entries.length; i++) {
      if (data.entries[i].entryId === data.editing.entryId) {
        data.editing.title = titleInput.value;
        data.editing.photo = photoInput.value;
        data.editing.notes = notesInput.value;
        for (var f = 0; f < liElements.length; f++) {
          if (parseInt(liElements[f].getAttribute('data-entry-id')) === data.editing.entryId) {
            liElements[f].replaceWith(createEntry(data.editing));
          }
        }
      }
    }
    form.reset();
    mainImage.setAttribute('src', 'images/placeholder-image-square.jpg');
    data.editing = null;
    mainView.setAttribute('class', 'container gray hidden');
    entriesView.setAttribute('class', 'container gray ');
  }
}

function createEntry(entry) {
  var li = document.createElement('li');
  li.setAttribute('class', 'row');
  li.setAttribute('data-entry-id', entry.entryId);
  var columnDivHead = document.createElement('div');
  columnDivHead.setAttribute('class', 'column-half flex justify-center');

  var imgHead = document.createElement('img');
  imgHead.setAttribute('src', entry.photo);
  imgHead.setAttribute('class', 'cover image-entry');

  var columnDivMain = document.createElement('div');
  columnDivMain.setAttribute('class', 'column-half');

  var columnDivFoot = document.createElement('div');
  columnDivFoot.setAttribute('class', 'column-half');

  var column1 = document.createElement('div');
  column1.setAttribute('class', 'flex justify-between align-center');

  var h2Main = document.createElement('h2');
  h2Main.setAttribute('class', 'h2-stretch h2-entry');
  h2Main.textContent = entry.title;
  var iMain = document.createElement('i');
  iMain.setAttribute('class', 'fas fa-pen hover');

  var pFoot = document.createElement('p');
  pFoot.textContent = entry.notes;
  pFoot.setAttribute('class', 'p-entry');

  li.appendChild(columnDivHead);
  li.appendChild(columnDivMain);
  columnDivHead.appendChild(imgHead);
  column1.appendChild(h2Main);
  column1.appendChild(iMain);
  columnDivMain.appendChild(column1);
  columnDivMain.appendChild(pFoot);

  noClass.setAttribute('class', 'row no-entries text-center hidden');
  return li;
}

var noClass = document.querySelector('#noClass');
var ul = document.querySelector('#entriesList');

var mainView = document.querySelector('#main');
var entriesView = document.querySelector('#entries');

var aContainer = document.querySelectorAll('a');

var aEntry = document.querySelector('#aEntries');
var aNew = document.querySelector('#aNew');

aEntry.addEventListener('click', switchView);
aNew.addEventListener('click', switchView);

function switchView(event) {
  for (var i = 0; i < aContainer.length; i++) {
    if (event.target.matches('#aEntries')) {
      mainView.setAttribute('class', 'container gray hidden');
      entriesView.setAttribute('class', 'container gray ');
      form.reset();
      mainImage.setAttribute('src', 'images/placeholder-image-square.jpg');
    } else if (event.target.matches('#aNew')) {
      mainView.setAttribute('class', 'container gray');
      entriesView.setAttribute('class', 'container gray hidden');
      h1Entry.textContent = 'New Entry';
    }
  }
}

window.addEventListener('DOMContentLoaded', createEntries);
function createEntries(event) {
  for (var i = 0; i < data.entries.length; i++) {
    var newEntry = createEntry(data.entries[i]);
    ul.appendChild(newEntry);
  }
}
var h1Entry = document.querySelector('#h1Entry');
var entryList = document.querySelector('#entriesList');
entryList.addEventListener('click', editPress);

function editPress(event) {
  if (event.target.matches('i')) {
    mainView.setAttribute('class', 'container gray');
    entriesView.setAttribute('class', 'container gray hidden');
  }
  h1Entry.textContent = 'Edit Entry';
  var liMatch = event.target.closest('.row');
  for (var i = 0; i < data.entries.length; i++) {
    if (data.entries[i].entryId === parseInt(liMatch.getAttribute('data-entry-id'))) {
      data.editing = data.entries[i];
    }
  }
  titleInput.value = data.editing.title;
  photoInput.value = data.editing.photo;
  mainImage.setAttribute('src', data.editing.photo);
  notesInput.value = data.editing.notes;
}
