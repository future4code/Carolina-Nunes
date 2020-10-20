const task = process.argv[2]
const taskList = ["Estudar", "Cozinhar", "Lavar roupa"]

const showTasks = (newTask) => {
    taskList.push(newTask)

    return console.log(`Tarefa adicionada com sucesso! Tarefas: ${taskList}`)
}
showTasks(task)