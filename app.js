//** Select items */
const alert = document.querySelector('.alert');
const form  = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('clear-btn');

//Edit option
let editElement;
let editFlag = false;
let editID = ""; 

//** Event Listners */
//Submit form
form.addEventListener('submit', addItem);

//** Fucntions */
function addItem(e) {
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString(); //to get an unique id
    if (value !== '' && editFlag === false) {
        
    } else if (value !== '' && editFlag === true){
        
    } else {
        displayAlert('Empty value', 'danger');
    }
}

//Display alert
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    //Remove alert
    setTimeout(function(){
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    },1000);
}