const todoList = JSON.parse(localStorage.getItem('todoList'))|| [];

renderTodoList();
function renderTodoList(){
    let todoListHTML = '';

    for (let i= 0 ;i < todoList.length; i++) {
        const todoObject = todoList[i];
        //const name = todoObject.name;
        //const dueDate = todoObject.dueDate;
        const {name,dueDate} = todoObject;
        
        const html =`<div>${name} </div>
        <div>${dueDate}</div>
        <div> <button onclick="
        todoList.splice(${i},1);
        renderTodoList();
        saveToStorage();
        " class="delete-todo-button">Delete</button></div>`;
        todoListHTML += html;
        
    }
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo(){
   
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    const dateinputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateinputElement.value;
    todoList.push({name,dueDate});
   
    inputElement.value = '';
    dateinputElement.value ='';
    
    renderTodoList();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('todoList',JSON.stringify(todoList));

}