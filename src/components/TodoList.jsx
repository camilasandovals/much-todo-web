import { useEffect } from 'react'
import { List } from 'antd'
export default function TodoList( {loading, itemList, setItemList, setLoading}) {

  
    useEffect(() => {
        fetch('http://127.0.0.1:5002/items')
        .then(resp => resp.json())
        .then(setItemList)
        .catch(alert)
        .finally(() => setLoading(false))
    }, [])
    return (
    <section>
        <List
         bordered
         dataSource={itemList}
         loading={loading}
         size = 'large'
         renderItem={(task) => (
            <List.Item className={(task.done) && 'done'} actions = {[<a className = "actions">edit</a>, <a className = "actions" onClick={handleDelete}>delete</a>]}>
                {task.item}
            </List.Item>
         )}
        />

    </section>
    )
}