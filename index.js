import "./styles.css"
import project from "./src/project.js"
import tasks from "./src/tasks.js"
import events from "./src/events.js"
//open the module
const button = document.querySelector(".add");
const module = document.querySelector(".module");
const list = document.querySelector(".list");

button.addEventListener("click", ()=>{
    module.show(); 
});

//submit button and form information get
const submit = document.querySelector(".submit");
function Task(taskName, taskDescription, priority, type, dueDate){ //task object 
    taskName = taskName; 
    taskDescription = taskDescription;
    priority = priority;
    type = type;
    dueDate = dueDate; 
    
    return {taskName, taskDescription, priority, type, dueDate};
}
const plist = []; //array of lists 
const elist = [];
const tlist = [];
submit.addEventListener("click", (e) =>{
    e.preventDefault(); //prevent form submission
    module.close(); 
    const taskName = document.getElementById("tn").value; 
    const taskDescription = document.getElementById("dn").value; 
    const priority = (()=>{
        if(document.getElementById("high").checked){
            return "high";
        }else if(document.getElementById("medium").checked){
            return "medium";
        }else{
            return "low";
        }
    })();
    let type = ""; 
    const dueDate = 0; 
    if(document.getElementById("p").checked){
        type = "Project";
        plist.push(Task(taskName, taskDescription, priority, type, dueDate)); //put the list in the array of lists 
    }else if(document.getElementById("e").checked){
        type = "Events";
        elist.push(Task(taskName, taskDescription, priority, type, dueDate)); //put the list in the array of lists 
    }else{
        type = "Tasks";
        tlist.push(Task(taskName, taskDescription, priority, type, dueDate)); //put the list in the array of lists 
    } 
});

export {plist, elist, tlist};

//event listener for the navigation bar and switching to the desired list 
const p = document.querySelector("#PS");
const e = document.querySelector("#ES");
const t = document.querySelector("#TS");

p.addEventListener("click", () =>{
    list.innerHTML = ""; 
    project(); 
});
e.addEventListener("click",()=>{
     list.innerHTML = ""; 
    events();
});
t.addEventListener("click", ()=>{
    list.innerHTML = ""; 
    tasks(); 
});