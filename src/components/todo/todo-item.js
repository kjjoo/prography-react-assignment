import React, { useContext } from 'react'
import styled from 'styled-components'
import { TodoContext } from '../../context/todo-context'

const TodoItemTemplate = styled.div`
  flex: 1;
  border-bottom: 1px solid rgb(226, 226, 226);
`
const ReWriteBtn = styled.button`
  border: none;
  background: none;
  color: rgb(148, 150, 253);
`
const DeleteBtn = styled.button`
  border: none;
  background: none;
  color: #e77f96;
`
const Finish = styled.p`
  color: rgb(150, 150, 150);
  text-decoration: line-through;
`
const Ing = styled.p`
  color: black;
`

// Todo 아이템 하나 컴포넌트
export default function TodoItem({ job, id, status }) {
  // TodoContext 사용
  const { removeTodo } = useContext(TodoContext)
  // 삭제 버튼 클릭시, removeTodo()에 id 넣기
  const onDeleteButtonClick = (id) => {
    removeTodo(id)
  }

  return (
    <>
      <TodoItemTemplate>
        {status === 'finish' ? (
          <Finish>
            {job} <ReWriteBtn>수정</ReWriteBtn>
            <DeleteBtn onClick={(e) => onDeleteButtonClick(id)}>삭제</DeleteBtn>
          </Finish>
        ) : (
          <Ing>
            {job} <ReWriteBtn>수정</ReWriteBtn>
            <DeleteBtn onClick={(e) => onDeleteButtonClick(id)}>삭제</DeleteBtn>
          </Ing>
        )}
      </TodoItemTemplate>
    </>
  )
}