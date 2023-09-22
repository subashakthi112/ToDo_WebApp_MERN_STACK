import './App.css'
import TodoList from './components/TodoList/TodoList'
import NewItem from './components/NewItem/NewItem'
import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
const App=()=> {

    const [list,setList]=useState([])
    const [editState,setEditState]=useState({})
    //console.log(editState)

    useEffect(() => {
      fetch('http://localhost:3000/api/v2/todo'
      ).then((res) =>  {
        res.json().then((json) => 
        {
          console.log(json)
          setList(json.data)
        })
      }).catch(() =>{
        console.log("network error")
      })
     },[])
     const deleteItem=(id) =>{
        
        fetch(`http://localhost:3000/api/v2/todo/${id}`,
        {
          method :'DELETE',
        }).then((res) => {
            const filteredList=list.filter((item) => (item._id!== id))
            setList([...filteredList])
            toast.danger("deleted successfully")
        })
        
    }
    const triggerEdit=(item) => {
      
        setEditState(item)
  }
    const editItem = (updatedItem) => {

      fetch(`http://localhost:3000/api/v2/todo/${updatedItem._id}`,
      {
        method:'PUT',
      }).then((res) =>  {
           const updatedList=list.map((item) => {
          if(item._id == updatedItem._id) // item.id == updatedItem.id ? updateditem : item
          {
            return updatedItem
          }
          return item
        })
          setList([...updatedList])  
          
      })
      

    }
    // const editItem = (updatedItem) =>{

    // }


    const addItem=(item)=>{
      fetch(`http://localhost:3000/api/v2/todo`,
      {
        method:'POST',
        headers :{
          'Accept':'application/json,text/plain,*/*',
          'Content-Type':'application/json'
        },
        body:JSON.stringify(item)
      }).then((res) => {
          res.json().then(json => {
            setList((prev) => [json.data,...prev])
            toast.success("added successfully")
          })
          
        })
      
    }

    const filterItem = (p) => {
        const filterlist= list.filter((p1) => (p1.priority == p))
        setList([...filterlist])
    }

    const filter = () => {
      fetch(`http://localhost:3000/api/v2/todo`).then((res) => 
      {
        res.json().then((json) => {
          setList(json.data)
          console.log(list)
        })
      }).catch(() => {
        console.log("network error")
      })
    }
    return(
    <div className='app'>
    <h1 className="title">
    TodoList
    </h1>
    <NewItem addItem={addItem} editState={editState} editItem={editItem} />
    <TodoList list={list} deleteItem={deleteItem} triggerEdit={triggerEdit} filterItem={filterItem}  filter={filter}/>

     
        
    </div>
  )
  
}


export default App
