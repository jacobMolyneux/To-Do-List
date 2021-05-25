import  {item, createElementFromObject} from './listObject.js';
function createForms(parent){
const EventNameData = document.getElementById('nameInput');
const EventTimeData = document.getElementById('timeInput');
const EventDateData = document.getElementById('dateInput');
const eventDetailsData = document.getElementById('detailsInput');
const createEventButton = document.getElementById('createEventButton');

createEventButton.addEventListener('click', function(){
    let eventName = EventNameData.value;
    let eventTime = EventTimeData.value;
    let eventDate = EventDateData.value;
    let eventDetail = eventDetailsData.value;
    const newEvent = new item(eventName, eventTime, eventDate, eventDetail);
    createElementFromObject(newEvent, document.getElementById('container'));
    return newEvent
});
};
export { createForms }