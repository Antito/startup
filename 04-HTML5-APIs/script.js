let textArea = document.getElementById("text-area");
let saveButton = document.getElementById("save-button");
let clearButton = document.getElementById("clear-button");

/* localStorage */

function saveLocalStorage(key, value) {
  localStorage.setItem(key, value);
  if (localStorage.getItem(key) === null) {
    throw new Error("Error in save Local Storage");
  }
}

function removeLocalStorage(key) {
  if (localStorage.getItem(key) !== null) {
    localStorage.removeItem(key);
  }
  else {
    throw new Error("Error in remove Local Storage");
  }
}

/*IndexDB */

let openReq = indexedDB.open("DataBase", 1);
let db;

openReq.onsuccess = (event) => {
  db = event.target.result;
}

openReq.onerror = (event) => {
  alert("Database error: " + event.target.errorCode);
}

openReq.onupgradeneeded = (event) => { 
  db = event.target.result;
  db.createObjectStore("text-area-storage", { autoIncrement: false });
}

function saveIndexedDB(key, value){
  var transaction = db.transaction([key], "readwrite");
  var storage = transaction.objectStore(key)
  storage.put(value, "text");
}

function removeIndexedDB(key){
  var transaction = db.transaction([key], "readwrite");
  var storage = transaction.objectStore(key);
  storage.clear();
}

/* Using Both */

function saveTextContent(event){
  event.preventDefault();
  try {
    saveLocalStorage("text-area-storage", textArea.value);
    saveIndexedDB("text-area-storage", textArea.value);
    alert("Saved successfully!");
    textArea.value = ""; 
  }
  catch (error) {
    alert("Saving failed!");
  }
}

function removeTextContent(event){
  event.preventDefault();
  try {
    removeLocalStorage("text-area-storage");
    removeIndexedDB("text-area-storage");
    alert("Removed successfully!");
    textArea.value = "";
  }
  catch(error) {
    alert("Removing failed!");
  }
}

saveButton.addEventListener("click", saveTextContent);
clearButton.addEventListener("click", removeTextContent); 