import {item, createElementFromObject} from './listObject.js';
import {newItemForms} from './newObject.js'
import {createForms} from './newItemButton.js'

const container = document.getElementById('container')
let itemlist = [];
const work =  new item('School', "May 23 2021", "9:00AM", "Go to school and learn something!")
itemlist.push(work);
createElementFromObject(work, container);

console.log("work's type is " + typeof(work));
let newItemButton = document.getElementById('addItemButton');
newItemButton.addEventListener('click', function(){
    let eventName = window.prompt("what do you want to do?");
    let eventTime = window.prompt("what time is the event");
    let eventDate = window.prompt("what Date is the Event");
    let eventDetails = window.prompt("Are There anymore details you would like to add?");
    console.log(`${eventName} at ${eventTime} on ${eventDate}. More Details : ${eventDetails}.`);
    const newEvent = new item(eventName, eventTime, eventDate, eventDetails);
    createElementFromObject(newEvent, container);
});

let sideBar = document.getElementById('sideBar'); 
createForms(sideBar);  
// newItemForms(sideBar);


