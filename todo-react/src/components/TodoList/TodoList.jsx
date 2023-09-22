import TodoListItem from "./TodoListItem/TodoListItem"
import './TodoList.css';
import { useState } from "react"
// const DEFAULT_LIST = [ {
//     title:'Study JS',
//     priority:'HIGH'
// },
// {
//     title:'Study CSS',
//     priority:'LOW'
// },
// {
//     title:'Study CSS',
//     priority:'MEDIUM'
// },

// ]

const TodoList = (props)=>{
    const  {list,deleteItem,triggerEdit,filterItem,filter}=props
    const priority_list=['low','medium','high']

    // const [list,setList]=useState(DEFAULT_LIST)
    // const deleteItem=(index) =>{
    //     const filteredList=list.filter((_,i) => i!== index)
    //     setList([...filteredList])
    // }
     if(list.length <=0)
    {
    return(
        <center>
            NO ITEMS TO BE DISPLAYED!</center>
    )
    }
    return(
        <>
        <div className='butn-container'>
            <button className="whole" onClick={()=> filter()}>list</button>
    {priority_list.map((p) => 
    <div key={p} className={`p-btn selected ${p}`} onClick={() => filterItem(p)}>
        {p}</div>)}
</div>
        {list.map((item,index) =>
        <TodoListItem
        key={index} 
        item={item}
        onDelete={deleteItem} 
        index={index} 
        onEdit={triggerEdit}
        />)}
        </>
    )
}

export default TodoList