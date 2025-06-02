// função que adiciona tarefa
function addTask(){
    const taskTitle = document.querySelector("#task-title").value;
    if(taskTitle){
        const template = document.querySelector(".template");
        const newTask = template.cloneNode(true);

        // adiciona título
        newTask.querySelector(".task-title").textContent = taskTitle;

        newTask.classList.remove("template", "hide");

        const list = document.querySelector("#task-list");
        list.appendChild(newTask);

        // evento remover
        newTask.querySelector(".remove-btn").addEventListener("click", function(){
            removeTask(this);
        });

        // evento completar
        newTask.querySelector(".done-btn").addEventListener("click", function(){
            completeTask(this);
        });

        // limpa input
        document.querySelector("#task-title").value = "";
    }
}

// função remover
function removeTask(task){
    task.parentNode.remove();
}

// função completar
function completeTask(task){
    const taskToComplete = task.parentNode;
    taskToComplete.classList.toggle("done");
}

// evento de adicionar
const addBtn = document.querySelector("#add-btn");
addBtn.addEventListener("click", function(e){
    e.preventDefault();
    addTask();
});
