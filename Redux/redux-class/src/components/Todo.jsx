import { useDispatch, useSelector } from "react-redux"
import AddForm from "./AddForm"
import { deleteTodo } from "../features/todo/todoSlice"

export default function Todo(){
    const todos = useSelector((state)=> state.todos)
    const dispatch = useDispatch()
    console.log(todos)

    const clickHandler=(id)=>{
        console.log(id)
        dispatch(deleteTodo(id))
    }
    return(
        <>
        <AddForm/>
        <h2>Todo List App</h2>
        <ul>
            {todos.map((todo)=>(<li key={todo.id}>{todo.task}
                <button onClick={()=>clickHandler(todo.id)}>Delete</button>
            </li>))}
        </ul>
        </>
    )
}