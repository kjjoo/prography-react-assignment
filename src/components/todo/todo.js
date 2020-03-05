import React, { useState } from "react";
import { todos } from "./todo-data";
import TodoItem from "./todo-item";
import styled from "styled-components";

const Input = styled.input`
  flex: 1;
  padding: 10px;
  outline: none;
  border: none;
  border-bottom: 1px solid rgb(226, 226, 226);
  ::placeholder {
    color: rgb(150, 150, 150);
  }
`;
const TodoTemplate = styled.div`
  width: 512px;

  background: white;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto;

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;


export default function Todo() {
  const [todo, setTodo] = useState(todos)

  const enter = e => {
    if (e.key === "Enter") {
      const enterValue = e.target.value
      const newTodo = {id: todo.length + 1, job: enterValue, status: "ing"}
      // 전개구문 (spread operator)
      setTodo([...todo, newTodo])
      e.target.value = ""

    }
  }


  return (
    <>
      <TodoTemplate>
        <Input placeholder="오늘은 무엇을 해야 하나요?" onKeyPress={enter}/>
        {todo.map((todo, index) => (
          <TodoItem
            key={index}
            job={todo.job}
            id={todo.id}
            status={todo.status}
          />
        ))}
      </TodoTemplate>
    </>
  );
}
