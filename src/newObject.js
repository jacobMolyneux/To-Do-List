import {createElementFromObject, item} from './listObject.js'
export function newItemForms(parent){
let eventNameInputDiv = document.createElement('div');
eventNameInputDiv.textContent = 'Name of To Do Item: '
let eventNameInput = document.createElement('input');
eventNameInput.setAttribute('type', 'text');

eventNameInputDiv.classList = 'FormDiv'
eventNameInputDiv.appendChild(eventNameInput);

let eventTimeInput = document.createElement('input');
eventTimeInput.setAttribute('type', 'text');
let eventTimeInputDiv = document.createElement('div');
eventTimeInputDiv.textContent = "What time should you do this?"
eventTimeInputDiv.classList = 'FormDiv'
eventTimeInputDiv.appendChild(eventTimeInput);

let eventDateInput = document.createElement('input');
eventDateInput.setAttribute('type', 'text');
let eventDateInputDiv = document.createElement('div');
eventDateInputDiv.textContent = "What is the Date?"
eventDateInputDiv.classList = 'FormDiv'
eventDateInputDiv.appendChild(eventDateInput);

let eventDetailsInput = document.createElement('input');
eventDetailsInput.setAttribute('type', 'text');
let eventDetailsInputDiv = document.createElement('div');
eventDetailsInputDiv.textContent = "Any other Details?"
eventDetailsInputDiv.classList = 'FormDiv'
eventDetailsInputDiv.appendChild(eventDetailsInput);


parent.appendChild(eventNameInputDiv);
parent.appendChild(eventTimeInputDiv);
parent.appendChild(eventDateInputDiv);
parent.appendChild(eventDetailsInputDiv);

let newItem = new item(eventNameInput, eventTimeInput, eventDateInput, eventDetailsInput);
}
