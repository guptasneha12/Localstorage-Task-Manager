const inputE1=document.querySelector("#input");
const buttonE1=document.querySelector("#delete");
const outputE1=document.querySelector("#list-container");
const form=document.querySelector("form");


// add task and save into local storage
const addTask=e=>{
    e.preventDefault();
    // check if input is empty
    if(inputE1.value===""){
        alert("Please enter a task");
    }

    // get the item
    const task=inputE1.value;
    if(task){
        let tasks;
        if(localStorage.getItem("tasks")===null){
            tasks=[];
            console.log(tasks);
        }
        else{
            tasks=JSON.parse(localStorage.getItem("tasks"));
            console.log(tasks);
        }
        tasks.unshift({
            id:Date.now(),
            title:task,
        });


        // save to storage

        localStorage.setItem("tasks",JSON.stringify(tasks));

        // after adding one task just remove or empty the input value
        inputE1.value="";
    }
    getTasks();
};




// get tasks 
const getTasks=()=>{
    let tasks;
    if(localStorage.getItem("tasks")===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem("tasks"));

    }
    console.log(tasks);

    //  display to DOM
    let output;
    const allTasks=tasks.map(task=>{
        return `
        <li id="item">
            <span>${task.title}</span>
            <button onclick="removeTask('${task.id}')" id="delete">X</button>
          </li>
        `;
    });
    output=allTasks.join("");
    outputE1.innerHTML=output;
};
getTasks();




// delete task
const removeTask=id=>{
    let tasks;
    if(localStorage.getItem("tasks")===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem("tasks",tasks));
    }
    tasks=tasks.filter(task=>{
        // means returning the task which are not deleted 
        return task.id!==+id;
    });
    localStorage.setItem("tasks",JSON.stringify(tasks));
    getTasks();
};


form.addEventListener("submit",addTask);





























