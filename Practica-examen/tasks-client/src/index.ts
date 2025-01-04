import { AuthService } from "./classes/auth-service";
import { Task } from "./interfaces/task";

const form = document.getElementById('taskForm') as HTMLFormElement;
const table = document.querySelector('#taskTable tbody');
const template = document.getElementById('taskTemplate') as HTMLTemplateElement;
const auth = new AuthService();

async function setTask() {
    const p= await auth.getTasks();
    p.forEach(task=>{
        tempTask(task);
    });
}

function tempTask(task:Task){
    const col = template.content.cloneNode(true) as DocumentFragment;
    const td = col.querySelectorAll('td');
    const succ = col.querySelector('.btn-success');
    const dang = col.querySelector('.btn-warning');
    console.log(task.id);
    td[0].textContent = task.id.toString();
    td[1].textContent = task.description;
    if(task.finished===true){
        dang?.classList.add('d-none');
    }else{
        succ?.classList.add('d-none');
    }
    const deleteButton = col.querySelector<HTMLButtonElement>(".btn-danger");
    deleteButton?.addEventListener('click',async ()=>{
        await auth.deleteTask(task.id);
        const row = deleteButton.closest('tr');
        if (row) {
            row.remove(); 
        }
    });
    succ?.addEventListener('click',async ()=>{
        const response=await auth.updateTask(task.id,false);
        if(response.task.finished===false){
            succ?.classList.add('d-none');
            dang?.classList.remove('d-none');
        }
    });

    dang?.addEventListener('click',async ()=>{
        const response=await auth.updateTask(task.id,true);
        if(response.task.finished===true){
            dang?.classList.add('d-none');
            succ?.classList.remove('d-none');
        }
    });
    table?.appendChild(col);
}

async function addTask(event:Event) {
    event.preventDefault();
    const formdesc = form.description.value;
    const response = await auth.postTask(formdesc);
    tempTask(response.task);
}


setTask();
form?.addEventListener('submit',addTask);