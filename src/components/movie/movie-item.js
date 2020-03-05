import React from "react";

import styled from "styled-components";

const Item = styled.p`
  font-size: 15px;
  text-align: center;
`
// 영화 제목 하나 컴포넌트
export default function MovieItem({ title }) {
  return (
    <>
      <Item>{title}</Item>
    </>
  );
}
