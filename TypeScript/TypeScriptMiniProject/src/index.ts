interface Todo {
    text: string;
    completed: boolean;
}


const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.getElementById("todolist");
const todos: Todo[] = readTodos();
todos.forEach(createTodo);

/**
 * todo 로컬스토리지에 저장된 값 반환 
 * @returns 
 */
function readTodos(): Todo[]{
    const todoListJSON = localStorage.getItem("todos");
    if(todoListJSON == null) return [];
    return JSON.parse(todoListJSON);
}

/**
 * todo 로컬스토리지에 저장
 */
function saveTodos(){
    localStorage.setItem("todos", JSON.stringify(todos));
}
/**
 * click 이벤트
 * @param e 
 */
function handleSubmit(e : SubmitEvent){
    e.preventDefault();
    const newTodo: Todo = {
        text: input.value,
        completed: false
    }
    todos.push(newTodo);
    createTodo(newTodo);
   
    saveTodos();
    input.value = "";
}

/**
 * todo dom 생성
 * @param todo 
 */
function createTodo(todo: Todo){
    const newLi = document.createElement("li");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = todo.completed;
    checkBox.addEventListener("change", function() {
        todo.completed = checkBox.checked;
        saveTodos();
    })
    newLi.append(todo.text);
    newLi.append(checkBox);
    list?.append(newLi);
}


/**
 * click 이벤트 리스너
 */
form.addEventListener("submit", handleSubmit);







