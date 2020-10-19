const task = process.argv[2]
const taskList = ["Estudar"]

const showTasks = (task) => {
    taskList.push(...taskList, task)

    return console.log(`Tarefa adicionada com sucesso!\n\n${taskList}`)
}
showTasks(task)