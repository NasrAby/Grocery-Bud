//** Select items */
const alert = document.querySelector('.alert');
const form  = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

//Edit option
let editElement;
let editFlag = false;
let editID = ""; 

//** Event Listners */
//Submit form
form.addEventListener('submit', addItem);

//Clear items
clearBtn.addEventListener('click', clearItems);

const deleteBtn = document.querySelector('.delete-btn');

//** Fucntions */
//Add item
function addItem(e) {
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString(); //to get an unique id
    if (value !== '' && editFlag === false) {
        const element = document.createElement('article');
        //Add class
        element.classList.add('grocery-item');
        //Add id
        const attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = `<p class="title">${value}</p>
                            <div class="btn-container">
                                <button type="button" class="edit-btn">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button type="button" class="delete-btn">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>`;
        const deleteBtn = element.querySelector('.delete-btn');
        const editBtn = element.querySelector('.edit-btn');
        deleteBtn.addEventListener('click', deleteItem);
        editBtn.addEventListener('click', editItem);
        
        //Apend child
        list.appendChild(element);
        //Display alert
        displayAlert('Item added', 'success');
        //Show container
        container.classList.add('show-container');
        //Add to local storage
        addToLocalStorage(id, value);
        //Set back to default
        setBackToDefault();
        
    } else if (value !== '' && editFlag === true){
        editElement.innerHTML = value;
        displayAlert('Item updated', 'success');
        //Edit local storage
        //editLocalStorage(editID, value);
        setBackToDefault();
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

//Clear items
function clearItems() {
    const items = document.querySelectorAll('.grocery-item');
    if (items.length > 0) {
        items.forEach(function (item) {
            list.removeChild(item);
        });
    }
    container.classList.remove('show-container');
    displayAlert('Empty list', 'danger');
    setBackToDefault();
    //localStorage.removeItem('list');
}

//Delete function
function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);
    if (list.children.length === 0) {
        container.classList.remove('show-container');
    }
    displayAlert('Item removed', 'danger');
    setBackToDefault();
    //Remove from local storage
    //removeFromLocalStorage(id);
}

//Edit function
function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    //Set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;
    //Set form value
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = 'Edit';
}

//Set back to default
function setBackToDefault() {
    grocery.value = '';
    editFlag = false;
    editID = '';
    submitBtn.textContent = 'Submit';
}

//**Local storage */
function addToLocalStorage(id, value) {
    const grocery = {id, value};
    console.log(grocery);
}

function removeFromLocalStorage(id) {

}

function editLocalStorage(id, value) {

}

//localStorage API

