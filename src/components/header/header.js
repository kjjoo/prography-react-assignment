import React from "react";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";

import "./header.css";

export default function Header() {
  return (
    <>
      <ul>
        <li>
          <Link to="/" data-tip="주히는 열심히 배우는 중">
            프로그라피 프론트 강주희
          </Link>
        </li>
        <li className="right">
          <Link to="/movie">Movies</Link>
        </li>
        <li className="right">
          <Link to="/">Todo</Link>
        </li>
      </ul>
      <ReactTooltip />
    </>
  );
}
