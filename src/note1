import React, { useState, useContext, useEffect } from 'react'
import Moment from 'moment'
import Axios from 'axios'
import { DashboardContext } from './Dashboard'
import Tarea from './Task'


const TaskForm = () => {

    const ctx = useContext(DashboardContext)
    
    const [id, setId] = useState(0)
    const [title, setTitle] = useState("")
    const [person, setPerson] = useState("")
    const [deadline, setDeatLine] = useState("")
    const [state, setState] = useState("todo")
    let task = {
        title,
        person,
        deadline,
        state
    }


    
    async function  sendForm(e) {
        e.preventDefault()
         await Axios.post(`${process.env.API_TODO}/tasks`, {task})
                 .then(resp => {
                   console.log(resp.data)
                   //console.log(`Post en Dashboard:${resp}`)
                   //task = resp.data.task
                   //ctx.setTasks([{task}])
                   //console.log([{task}])
                   //addTask(resp.data)
                   addChildTask(resp.data); //Solución temporal no óptima mejorar para API real
                 })
    }

    function addTask(data){
        //console.log(data)
        //setTasks(data)
    }

    function unixToDate(time, format = "DD/MM/YYYY") { //Optimizar para hacer reutilizable
        return Moment.unix(time).format(format) 
    }

    function addChildTask({id,task}){ //Solución temporal no óptima
        let newTask = document.createElement("article")

        newTask.classList.add("s-radius-1","s-pxy-4","s-shadow-bottom","course-card","background","s-shadow-card-micro","s-transition","white-color","nowrap","s-column","s-mb-0")

        let taskId = document.createElement("h1")
        taskId.innerText = `#:${id}`

        let taskTitle = document.createElement("p")
        taskTitle.innerText = task.title
    
        let taskPerson = document.createElement("p")
        taskPerson.innerHTML = `<span>Responsable:</span> ${task.person}`
        
        let taskDeadline = document.createElement("p")
        taskDeadline.innerHTML = `<span>Expire:</span> ${unixToDate(task.deadline)}`
    
        newTask.appendChild(taskId)
        newTask.appendChild(taskTitle)
        newTask.appendChild(taskPerson)
        newTask.appendChild(taskDeadline)
    
        let columnToDo = document.getElementById("todo")
        let columnInProgress = document.getElementById("progress")
        let columnDone = document.getElementById("done")
    
        if (task.state === "todo") {
          columnToDo.appendChild(newTask)
        }
        if (task.state === "progress") {
          columnInProgress.appendChild(newTask)
        }
        if (task.state === "done") {
          columnDone.appendChild(newTask)
        }     
    }




    async function  delTask(e,id) {
    e.preventDefault()
    console.log(e)
    console.log(id)
    try {
        await Axios.delete(`${process.env.API_TODO}/tasks/${id}`)
            .then(resp => { 
                console.log(resp) 
                //remChildTask(resp.data); //Solución temporal no óptima mejorar para API real
            })
    } catch (e) {
        console.error(e);
    } finally {
        console.log('Consulta finalizada');
    }
    }

    return (
                
                <aside className="" id="formElement">
                    <div className="aside-container">
                        <h2>Nueva Tarea</h2>
                        <div className="form-container">
                            <form id="formTask">
                                <div className="input-container">
                                    <label htmlFor="idTask">id</label>
                                    <input type="disable" name="idTask" id="idTask" onChange={(e)=> setId(e.target.value)} ></input>
                                </div>
                                <div className="input-container">
                                    <label htmlFor="titleTask">Título</label>
                                    <input name="titleTask" id="titleTask" onChange={(e)=> setTitle(e.target.value)} type="text" placeholder="Escriba un título descriptivo" required></input>
                                </div>
                                <div className="input-container">
                                    <label htmlFor="personTask">Responsable</label>
                                    <select name="personTask" id="personTask" onChange={(e)=> setPerson(e.target.value)} required>
                                    <option value="">-Seleccionar-</option>
                                    <option value="Admin">Admin</option>
                                    <option value="Guido Miranda">Guido Miranda</option>
                                    </select>
                                </div>
                                <div className="input-container">
                                    <label htmlFor="deadlineTask">Plazo de entrega</label>
                                    <select name="deadlineTask" id="deadlineTask" onChange={(e)=> setDeatLine(1591802130)} required>
                                    <option value="">-Seleccionar-</option>
                                    <option value="1">1 día</option>
                                    <option value="7">1 semana</option>
                                    <option value="30">1 mes</option>
                                    </select>
                                </div>
                                <div className="action-container ed-grid m-grid-3">
                                    <button type="submit" id="sendForm" onClick={(e)=> {sendForm(e)}}>Guardar</button>
                                    <button type="reset" id="cancelForm">Cancelar</button>
                                    <button type="submit" id="delForm" onClick={(e)=> {
                                        delTask(e,id)}} >Eliminar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </aside>
            )
}

export default TaskForm