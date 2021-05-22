import item from './listObject.js';
const container = document.getElementById('container')
function createElementFromObject(item, parent){
    const itemContainer = document.createElement('div');
    itemContainer.setAttribute('id', 'item');
    const titleDisplay = document.createElement('div');
    titleDisplay.textContent = item.title;
    titleDisplay.setAttribute('id', 'name'); 
    const dateDisplay = document.createElement('div');
    dateDisplay.textContent = item.date;
    dateDisplay.setAttribute('id', 'date');
    const timeDisplay = document.createElement('div');
    timeDisplay.textContent = item.time;
    timeDisplay.setAttribute('id', 'time'); 
    const descriptionDisplay = document.createElement('div');
    descriptionDisplay.textcontent = item.description;
    descriptionDisplay.setAttribute('id', 'details'); 
    itemContainer.appendChild(titleDisplay, dateDisplay, timeDisplay, descriptionDisplay); 
    parent.appendChild(itemContainer);
}
let work = item('School', "May 23 2021", "9:00AM", "Go to school and learn something!")
createElementFromObject(work, container); 
