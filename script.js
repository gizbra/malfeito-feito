const form= document.getElementById('todo-form');
const input= document.getElementById('todo-input');
const list= document.getElementById('todo-list');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function renderTodos() {
    list.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.style.animation = 'fadeInUp 0.3s ease forwards';
        li.textContent = todo.text;
        if (todo.completed) {
            li.classList.add('completed');
            li.addEventListener('click', () => {
                todos[index].completed = !todos[index].completed;
                localStorage.setItem('todos', JSON.stringify(todos));
                saveTodos();
                renderTodos();
            });
const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Excluir';
            deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                todos.splice(index, 1);
                saveTodos();
                renderTodos();
            });

            li.appendChild(deleteBtn);
            list.appendChild(li);
        });
        }
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const todoText = input.value.trim();
    if (text !=='') {
        todos.push({ text, completed: false});
        saveTodos();
        renderTodos();
        input.value = '';
    }
});

renderTodos();

const toggleBtn = document.getElementById('toggle-theme');
fuction applyTheme(theme) {
    Document.body.classList.toggle('dark', theme === 'dark');
}
toggleBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

window.addEventListener('DomContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
});      
