"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const list = document.getElementById("todolist");
const todos = readTodos();
todos.forEach(createTodo);
/**
 * todo 로컬스토리지에 저장된 값 반환
 * @returns
 */
function readTodos() {
    const todoListJSON = localStorage.getItem("todos");
    if (todoListJSON == null)
        return [];
    return JSON.parse(todoListJSON);
}
/**
 * click 이벤트
 * @param e
 */
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false
    };
    todos.push(newTodo);
    createTodo(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
    input.value = "";
}
/**
 * todo dom 생성
 * @param todo
 */
function createTodo(todo) {
    const newLi = document.createElement("li");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    newLi.append(todo.text);
    newLi.append(checkBox);
    list === null || list === void 0 ? void 0 : list.append(newLi);
}
/**
 * click 이벤트 리스너
 */
form.addEventListener("submit", handleSubmit);
