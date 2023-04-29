import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from "react";
import Header from "./components/Header.jsx";
import TodoList from "./components/TodoList.jsx";
import Todo from "./components/Todo.jsx";
import SignUp from "./components/SignUp.jsx";
import Login from "./components/Login.jsx";
import "./App.css";


function App() {
  const [loading, setLoading] = useState(true);
  const [itemList, setItemList] = useState();

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todo loading={loading} itemList={itemList} setItemList = {setItemList} setLoading={setLoading}/>}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
