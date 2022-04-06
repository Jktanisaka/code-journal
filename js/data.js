/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('beforeunload', storeEntry);
function storeEntry(event) {
  var saveDataJSON = JSON.stringify(data);
  localStorage.setItem('javascript-local-storage', saveDataJSON);
}

var storedItems = localStorage.getItem('javascript-local-storage');
if (storedItems !== null) {
  data = JSON.parse(storedItems);
}
