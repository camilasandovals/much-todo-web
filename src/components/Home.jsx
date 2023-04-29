import Footer from "./Footer";
import Header from "./Header"
import TodoList from "./TodoList"
import { Button } from "antd"
import { useNavigate } from "react-router-dom"

export default function Home({loading, itemList, setItemList, setLoading, email}){
    const navigate = useNavigate();

    if(!email){
        navigate("/login")
    }

    return (
        <>  <h2>Welcome {email}</h2>
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
            <section className="button-container">
                <Button type="primary" onClick={() => navigate("/login")}>Logout</Button>
            </section>
         
        </>
    )
}