import React from "react";
import styled from "styled-components";

const ReWriteBtn = styled.button`
  border: none;
  background: none;
  color: rgb(148, 150, 253);
`;
const DeleteBtn = styled.button`
  border: none;
  background: none;
  color: #e77f96;
`;
const Finish = styled.p`
  color: rgb(150, 150, 150);
  text-decoration: line-through;
`;
const Ing = styled.p`
  color: black;
`;

export default function TodoItem({ job, id, status }) {
  return (
    <>
      {status === "finish" ? (
        <Finish>
          {job} <ReWriteBtn>수정</ReWriteBtn>
          <DeleteBtn>삭제</DeleteBtn>
        </Finish>
      ) : (
        <Ing>
          {job} <ReWriteBtn>수정</ReWriteBtn>
          <DeleteBtn>삭제</DeleteBtn>
        </Ing>
      )}
    </>
  );
}

//status finish일 때 가운데줄 색상 회색, 수정삭제 버튼 색 주기 테두리 없애기, input 만들기, UI 최대한 비슷하게 만들어오기, 무비 디자인 통일, 무비도 아이템으로 빼기
