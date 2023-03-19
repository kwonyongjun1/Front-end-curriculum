"use strict";
const todos = [];
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const list = document.getElementById("todolist");
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false
    };
    todos.push(newTodo);
    createTodo(newTodo);
    input.value = "";
}
function createTodo(todo) {
    const newLi = document.createElement("li");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    newLi.append(todo.text);
    newLi.append(checkBox);
    list === null || list === void 0 ? void 0 : list.append(newLi);
}
form.addEventListener("submit", handleSubmit);
