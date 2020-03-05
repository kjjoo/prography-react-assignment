import React, { useContext } from "react";
import TodoItem from "./todo-item";
import styled from "styled-components";
import { TodoContext } from "../../context/todo-context";

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
// Todo 리스트 출력 템플릿
const TodoTemplate = styled.div`
  text-align: center;
  width: 512px;

  background: white;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto;

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

// Todo 리스트 컴포넌트
export default function Todo() {
// context 사용
  const { todo, addTodo } = useContext(TodoContext)

  // input 창에서 엔터키가 입력되었을 때 이벤트
  const enter = (e) => {
    if (e.key === 'Enter') {
      const enterValue = e.target.value // 입력값
      addTodo(enterValue)
      e.target.value = '' //입력값은 초기화
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
