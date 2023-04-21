import { useState } from "react";
import Header from "./components/Header.jsx";
import TodoList from "./components/TodoList.jsx";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [itemList, setItemList] = useState();

  return (
    <main>
      <h1>Much Todo</h1>
      <Header setLoading={setLoading} setItemList={setItemList} />
      <TodoList loading={loading} itemList={itemList} setItemList = {setItemList} setLoading={setLoading}/>
    </main>
  );
}

export default App;
