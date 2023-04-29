import { useEffect } from 'react'
import { Button, List } from 'antd'
export default function TodoList( {loading, itemList, setItemList, setLoading}) {

    const handleDelete = async (id) => {
        setLoading(true)
        const response = await fetch(`https://much-todo-api-cs.web.app/items/${id}`, {
            method: "DELETE",
        })
        console.log(id)
    }

    const handleUpdate = async (task) => {
        setLoading(true)
        const modifiedItem = {
            done: !task.done
        }
        const response = await fetch(`https://much-todo-api-cs.web.app/items/${task.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(modifiedItem)
        })
        
    }
    useEffect(() => {
        fetch('https://much-todo-api-cs.web.app/items')
        .then(resp => resp.json())
        .then(setItemList)
        .catch(alert)
        .finally(() => setLoading(false))
    }, [itemList])

    return (
        <>
            <section>
                <List
                bordered
                dataSource={itemList}
                loading={loading}
                size = 'large'
                renderItem={(task) => (
                    <List.Item className={(task.done) && 'done'} actions = {[<a className = "actions" onClick={() => handleUpdate(task)}>change status</a>, <a className = "actions" onClick={() => handleDelete(task.id)}>delete</a>]}>
                        {task.item}
                    </List.Item>
                )}
                />

            </section>

        </>
    )
}