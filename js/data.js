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
