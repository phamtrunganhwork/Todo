'use client'

import {useState} from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Task from './components/Task'
import Button from '@mui/material/Button'

export default function Page(){

  const [tasks, setTasks] = useState([{id:0, todo:"One"}]);
  const [idgiver, setIdgiver] = useState(1)

  function addButtonHandle(){
    setIdgiver(idgiver+1)
    setTasks([...tasks, {id: idgiver, todo: "New Task"}])
    console.log(tasks)
  }

  function deleteButtonHandle(id){
    setTasks(tasks.filter((task) => task.id !== id))
    console.log(id)
  }

  function modifyButtonHandler(id, todo){
    setTasks(tasks.map((task) => task.id === id ? task.todo = todo : task));
  }

  return <>
  <Header/>
  {console.log(tasks)}
  { tasks ? tasks.map((task) => <Task key={task.id} id={task.id} todo={task.todo} onDelete={deleteButtonHandle}/>) : null}
  <Button onClick={addButtonHandle} variant='contained'>Add</Button>
  <Footer/>
  </>
  
}