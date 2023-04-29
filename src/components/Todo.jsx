import Header from "./Header"
import TodoList from "./TodoList"
import { Button } from "antd"
import { useNavigate } from "react-router-dom"

export default function Todo({loading, itemList, setItemList, setLoading}){
    const navigate = useNavigate();
    return (
        <>
            <main>
                <h1>Much Todo</h1>
                <Header 
                    setLoading={setLoading} 
                    setItemList={setItemList} />

                <TodoList 
                    loading={loading} 
                    itemList={itemList} 
                    setItemList={setItemList} 
                    setLoading={setLoading} />
            </main>
        
                <Button className="login-form-button" onClick={() => navigate("/login")}>Logout</Button>
         
        </>
    )
}