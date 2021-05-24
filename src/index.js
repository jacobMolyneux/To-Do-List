import {item, createElementFromObject} from './listObject.js';
const container = document.getElementById('container')

const work =  new item('School', "May 23 2021", "9:00AM", "Go to school and learn something!")

createElementFromObject(work, container);

console.log("work's type is " + typeof(work));
