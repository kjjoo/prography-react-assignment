import React from "react";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";
// styled-components 활용 ul, li 스타일 적용
const UlStyle = styled.ul`
  background-color: white;
  border-bottom: groove lightgray;
  list-style-type: none;
  margin: 0;
  padding: 0;
  :after {
  content: "";
  display: block;
  clear: both;
}`
const LiStyle = styled.li`
  float: left;
  a {
  display: block;
  color: gray;
  text-align: right;
  padding: 12px 14px;
  text-decoration: none;
 }
`
const LiStyleRight = styled.li`
  float: right;
  a {
  display: block;
  color: gray;
  text-align: right;
  padding: 12px 14px;
  text-decoration: none;
  :hover {
   color: #e70031;
  }
 }
`

export default function Header() {
  return (
    <>
      <UlStyle>
        <LiStyle>
          <Link to="/" data-tip="주히는 열심히 배우는 중">
            프로그라피 프론트 강주희
          </Link>
        </LiStyle>
        <LiStyleRight>
          <Link to="/movie">Movies</Link>
        </LiStyleRight>
        <LiStyleRight>
          <Link to="/">Todo</Link>
        </LiStyleRight>
      </UlStyle>
      <ReactTooltip />
    </>
  );
}
