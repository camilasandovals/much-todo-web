import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from "react";
import Header from "./components/Header.jsx";
import TodoList from "./components/TodoList.jsx";
import Home from "./components/Home.jsx";
import SignUp from "./components/SignUp.jsx";
import Login from "./components/Login.jsx";
import "./App.css";
import Footer from './components/Footer.jsx';


function App() {
  const [loading, setLoading] = useState(true);
  const [itemList, setItemList] = useState();
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[user, setUser] = useState()

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home email={email} setEmail={setEmail} password={password} setPassword={setPassword} user={user} setUser={setUser} loading={loading} itemList={itemList} setItemList={setItemList} setLoading={setLoading}/>}/>
        <Route path="/signup" element={<SignUp email={email} setEmail={setEmail} password={password}setPassword={setPassword} user={user} setUser={setUser}/>}/>
        <Route path="/login" element={<Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} user={user} setUser={setUser}/>}/>
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default App;
