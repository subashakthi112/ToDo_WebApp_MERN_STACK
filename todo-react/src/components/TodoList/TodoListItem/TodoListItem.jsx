import { useState } from 'react'
import './TodoListItem.css'


const TodoListItem=(props)=>{
    const {item,onDelete,onEdit,index}=props;
    const { title,priority,_id}=item
    //props.onDelete
    //const isChecked=true
    const[isChecked,setChecked]=useState(false)
    return(
        <>
        <div className={`item-card ${priority}`}>
            { isChecked  ? (
                <span className='material-symbols-outlined pointer' onClick={()=>setChecked(false)}>
                check_box 
                </span>
            
            ):(
            <span className='checkbox pointer' onClick={()=> setChecked(true)}/>
            
            )}
            <div className={`card ${isChecked && 'strike'}`}>{title}</div>
            <div className={`badge ${priority}`}>{priority}</div>
            <div className='material-symbols-outlined pointer' onClick={() => onEdit(item)}>edit</div>
            <div className='material-symbols-outlined pointer' onClick={()=> onDelete(_id)}>delete</div>



        </div>
        </>
    )
}
export default TodoListItem