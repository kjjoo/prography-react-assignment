import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './styles.css'
import Header from './components/header/header'
import Movie from './components/movie/movie'
import Todo from './components/todo/todo'
import { TodoContext } from './context/todo-context'

export default function App() {
  // Todo context 활용, todo, addTodo, removeTodo 만들기
  // 새로운 변수를 선언하고, todo라고 부름
  const [todo, setTodo] = useState([])

  function addTodo(job) {
    const newTodo = { id: todo.length + 1, job: job, status: 'ing' }      // 입력값에 따라 id, job, status 저장
    // 전개구문 (spread operator) -> todo를 펼치고, newTodo 보여주기
    setTodo([...todo, newTodo])
  }

  function removeTodo(id) {
    setTodo([...todo.filter((item) => item.id !== id)])
  }

//provider을 이용해 하위 트리에 테마 값을 보내줌, header를 제외한 부분에서 context 사용(다른 메뉴에 다녀와도 값 유지됨)
  return (
    <BrowserRouter>
      <div>
        <Header />
        <TodoContext.Provider
          value={{ todo: todo, addTodo: addTodo, removeTodo: removeTodo }}
        >
          <Switch>
            <Route path="/movie">
              <Movie />
            </Route>
            <Route path="/">
              <Todo />
            </Route>
          </Switch>
        </TodoContext.Provider>
      </div>
    </BrowserRouter>
  )
}