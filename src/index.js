// document.addEventListener("DOMContentLoaded", () => {
   // your code here
// });

   // As a user, I should be able to type a task into the input field.
   // As a user, I should be able to click some form of a submit button.
   // As a user, the task string that I provided should appear on the DOM after the submit button has been activated.
   // no remove item button
// document.querySelectorAll('input')[1].addEventListener('click', function(event) {
//    const description = document.getElementById('new-task-description').value;
//    const input = document.getElementById('tasks');
//    input.innerHTML += `<li> ${description} </li>` 
//    event.preventDefault();
// });

   // A delete function that will remove tasks from your list
document.querySelectorAll('input')[1].addEventListener('click', function(event) {
   const description = document.getElementById('new-task-description').value;
   const input = document.getElementById('tasks');
   input.innerHTML += `<li> ${description} <button data-description = ${description} onclick = removeItem()>X</button></li>`
   event.preventDefault();
});

function removeItem() {
   const itemToRemove = document.querySelector('li');
   itemToRemove.parentNode.removeChild(itemToRemove);
};

// A priority value selected from a dropdown that is used to determine the color of the text in the list 
// (e.g. red for high priority, yellow for medium, green for low)
   // Resource: https://stackoverflow.com/questions/42566224/javascript-select-color-of-text-with-dropdown-menu
   // Not worked
// function selectColor() {
//    const color = document.getElementById('colors').value;
//    document.querySelector('li').style.color = color;
// }

// <h3>Select Color
// <select id='colors' onchange='selectColor();'>
//    <option value='red'>High Priority</option>
//    <option value='yellow'>Medium Priority</option>
//    <option value='green'>Low Priority</option>
// </select>
// </h3>