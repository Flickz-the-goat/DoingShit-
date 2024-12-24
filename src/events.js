//imports 
import {plist, elist, tlist} from "C:/Users/aniau/repos/DoingShit-/index.js"; 

//get the lists 
const l = document.querySelector(".list"); 

export function events(){
    for(let i = 0; i < elist.length; i++){
        const taskContainer = document.createElement("div"); //container for task
        taskContainer.classList.add("taskContainer");

        const taskName = document.createElement("div");
        taskName.classList.add("taskName");
        const taskDescription = document.createElement("div");
        taskDescription.classList.add("taskDescription");
        const priority = document.createElement("div");
        priority.classList.add("priorityVal");
        const type = document.createElement("div");
        type.classList.add("typeVal");
        const dueDate = document.createElement("div");
        dueDate.classList.add("dueDateVal");

        taskName.textContent = elist[i].taskName;
        taskDescription.textContent = elist[i].taskDescription;
        priority.textContent = elist[i].priority; 
        type.textContent = elist[i].type;
        dueDate.textContent = elist[i].dueDate; 

        const done = document.createElement("button");
        done.type = "button";
        done.classList.add("done");
        done.textContent = "Done";
        
        taskContainer.appendChild(done);
        taskContainer.appendChild(taskName);
        taskContainer.appendChild(taskDescription);
        taskContainer.appendChild(priority);
        taskContainer.appendChild(type);
        taskContainer.appendChild(dueDate);

        l.appendChild(taskContainer); 

        done.addEventListener("click", () =>{
            taskContainer.remove(); 
        });
    }
};
export default events; 
