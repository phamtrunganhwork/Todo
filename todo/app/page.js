"use client";

import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Task from "./components/Task";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";

export default function Page() {
  const [tasks, setTasks] = useState([{ id: 0, todo: "One" }]);
  const [idgiver, setIdgiver] = useState(1);

  function addButtonHandler() {
    setIdgiver(idgiver + 1);
    setTasks([...tasks, { id: idgiver, todo: "New Task" }]);
    console.log(tasks);
  }

  function deleteButtonHandler(id) {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log(id);
  }

  return (
    <>
      <Header />
      <Container sx={{height: 300, overflowY: "scroll"}}>
        {tasks
          ? tasks.map((task) => (
              <Task
                key={task.id}
                id={task.id}
                todo={task.todo}
                onDelete={deleteButtonHandler}
              />
            ))
          : null}
      </Container>
      <Container>
      <Button
        onClick={addButtonHandler}
        variant="contained"
        sx={{display: "block", margin: "20px auto", width: '50%'}}
      >
        Add
      </Button>
      <Footer />
      </Container>
    </>
  );
}
