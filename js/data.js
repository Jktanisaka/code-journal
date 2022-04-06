/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('beforeunload', storeEntry);
function storeEntry(event) {
  var saveEntryJSON = JSON.stringify(data.entries);
  localStorage.setItem('javascript-local-storage', saveEntryJSON);
}

var storedItems = localStorage.getItem('javascript-local-storage');
if (storedItems !== null) {
  data.entries = JSON.parse(storedItems);
}
