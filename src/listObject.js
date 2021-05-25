class item{
constructor(name, date, time, details, project){
    this.name = name;
    this.date = date;
    this.time = time;
    this.details = details;
    this.project = project; 
}
}
function createElementFromObject(item, parent){
    const itemContainer = document.createElement('div');
    itemContainer.classList = 'item';
    const titleDisplay = document.createElement('div');
    titleDisplay.textContent = item.name;
    titleDisplay.setAttribute('id', 'name'); 
    const dateDisplay = document.createElement('div');
    dateDisplay.textContent = item.date;
    dateDisplay.setAttribute('id', 'date');
    const timeDisplay = document.createElement('div');
    timeDisplay.textContent = item.time;
    timeDisplay.setAttribute('id', 'time'); 
    const descriptionDisplay = document.createElement('div');
    descriptionDisplay.textContent = item.details;
    descriptionDisplay.setAttribute('id', 'details'); 
    itemContainer.appendChild(titleDisplay); 
    itemContainer.appendChild(dateDisplay);
    itemContainer.appendChild(timeDisplay);
    itemContainer.appendChild(descriptionDisplay); 
    parent.appendChild(itemContainer);
}
export { item, createElementFromObject}