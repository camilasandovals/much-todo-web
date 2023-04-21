import { Input } from "antd"

export default function Header( {setItemList , setLoading}) {
    
const handleAdd = async (value) => {

    if(value.length < 4) return 

    setLoading(true)
    const newItem = {
        done: false,
        userId: "me",
        item: value, //what the user typed in is "value"
    }
    const response = await fetch('http://127.0.0.1:5002/items', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newItem), 
    })
    const data = await response.json()
    setItemList(data)
    setLoading(false)
}

    return (
        <header>
            <Input.Search
            allowClear
            enterButton= "Add"
            size= "large"
            onSearch={handleAdd}
            placeholder="Add new todo item"
            />
        </header>
    )
}