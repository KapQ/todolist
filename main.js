// Add your JS here
let todoapp = document.querySelector('todoapp');
let header = document.querySelector('header');
let new-todo = document.querySelector('newtodo');
let body = document.querySelectorAll('body');
let main = document.querySelector('main');
let todo-list = document.querySelector('todolist');
todolist.addEventListener('keypress', function addListItem(event) {
  if (event.keyCode == 13){
    let todoContent = event.target.value;
    event.target.value = "";
    let newTodoli = document.createElement('li');
    newTodoli.textContent = todoContent;
    todoList.appendChild(newTodoli);
    todolist.innerHTML = `<li><div class="view"><label>Buy Milk</label></div></li>`;
    todoList.appendChild(newTodoli);
    todolist.innerHTML = `<li><div class="view"><label>Wash Car</label></div></li>`
  }
    return event;
  }
});
