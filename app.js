const addTodoInput = document.querySelector('input');
const addTodoBtn = document.querySelector('#addTodoBtn');

const todos = document.querySelector('#todos');
const doneTodos = document.querySelector('#doneTodos');

let activeTodos = [];
let removeBtns = [];

let index = 0;

function addToList(){
    if(addTodoInput.value != ""){
        activeTodos.push(addTodoInput.value);
        addTodoInput.value = "";
        showList();
    }
}

addTodoBtn.addEventListener('click', addToList);

function showList(){
    const activeTodo = document.createElement('li'); 
    activeTodo.innerText = activeTodos[index];
    todos.append(activeTodo);

    const removeBtn = document.createElement('div');
    removeBtn.innerText = 'remove';
    removeBtn.classList.add('removeBtn');
    // removeBtns.push(removeBtn);
    // activeTodo.append(removeBtns[index]);
    activeTodo.append(removeBtn);
    activeTodo.addEventListener('click', removeTodo);
    // removeBtns.forEach(removeBtn => removeBtn.addEventListener('click', removeTodo));
    
    index++;
}

function removeTodo(e){
    e.target.innerText = 'done';
    const removedTodo = e.target.parentNode;
    removedTodo.remove();

    doneTodos.append(removedTodo);

}







