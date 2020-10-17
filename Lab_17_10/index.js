const addButton = document.getElementById('addButton');
const taskSentence = document.getElementById('taskSentence')

addButton.onclick = function (e) {

  //check if ordere list exists
  let listExists = document.querySelector('ol');
  if (listExists === null) {
    console.log("create list")
    list = document.createElement('ol')
    document.body.insertBefore(list, taskSentence);
  }

  //add new task to list
  let x = taskSentence.value;
  newTask = document.createElement('li')
  newTask.textContent += x;
  newTask.classList.add('list-element')
  document.querySelector('ol').appendChild(newTask);

  //add action to all list elements
  const listElements = document.querySelectorAll('li');
  for (const listElement of listElements) {

    //on mouse enter show delete  button
    listElement.onmouseenter = function (e) {
      deleteButton = document.createElement('button')
      deleteButton.classList.add('delete-element')
      deleteButton.innerHTML = "Usuń";
      e.target.appendChild(deleteButton);
      e.target.classList.add("canBeDeleted")
      //delete specified task
      deleteButton.onclick = function (e) {
        document.querySelectorAll('.canBeDeleted').forEach(function (a) { a.remove() })
      }
    }

    //on mouse leave hide delete button
    listElement.onmouseleave = function (e) {
      e.target.classList.remove("canBeDeleted")
      const buttons = document.querySelectorAll('ol li button')
      for (const button of buttons) {
        button.remove()
      }
    }
  }

}
