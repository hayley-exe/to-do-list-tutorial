//Initialize(create) an empty array element called tasks
let tasks = []

//Add an ON CLICK event listener to the "add task button" that calls a function
document.getElementById('addTaskBtn').addEventListener('click', function () {
    //get the value of the input box and store it in a variable called taskInput
    let taskInput = document.getElementById('taskInput').value

    //Check if taskInput has value(content)
    if (taskInput) {
        //Add the new task to the tasks array
        tasks.push(taskInput)

        //Clear the input field after adding task
        document.getElementById('taskInput').value = ''

        //Call function to update the task list display
        displayTasks()
    }
})

//Function to display tasks in the list
function displayTasks() {
    //Select the unordered list (taskList) in the HTML
    let taskList = document.getElementById('taskList')

    //Clear the existing task list before updating it
    taskList.innerHTML = ''

    //Loop through each task in the array and create a list item
    tasks.forEach((task, index) => {
        //Create a new <li> element for each task
        let li = document.createElement('li')

        //Add CSS classes for styling
        li.classList.add(
            'list-group-item',
            'd-flex',
            'justify-content-between',
            'align-items-center'
        )

        li.innerHTML = `${task} <div class="buttonContainer" onclick="removeTask(${index})">
        <input type="checkbox" class="checkbox-wrapper-63">
        <div class="checkbox-wrapper-63">
            <label class="switch">
                <input type="checkbox">
                <span class="slider"></span>
            </label>
        </div>
    </div>`

        //Append the new task in the task list
        taskList.appendChild(li)


    })
}

//Function to remove task from list when check button is clicked
function removeTask(index) {
    tasks.splice(index, 1)
    //Call the function to update task list display
    displayTasks()
}

//Event listener for the "Clear All Tasks" button
document.getElementById('clearTasksBtn').addEventListener('click', function () {
    //Empty task array to remove all tasks
    tasks = []
    //Call the function to update the task list display
    displayTasks()
})
window.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        let taskInput = document.getElementById('taskInput').value

        //Check if taskInput has value(content)
        if (taskInput) {
            //Add the new task to the tasks array
            tasks.push(taskInput)

            //Clear the input field after adding task
            document.getElementById('taskInput').value = ''

            //Call function to update the task list display
            displayTasks()
        }
    }
})

