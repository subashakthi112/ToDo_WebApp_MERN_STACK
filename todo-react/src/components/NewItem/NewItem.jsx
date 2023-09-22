import './Newitem.css'
import React,{useEffect, useState} from 'react'


const Newitem =(props)=>{
   const [title,setTitle]=useState('')
   const {addItem,editState,editItem} = props
   const [priority,setPrior] = useState('')
   const [isactive,setactive]=useState(false)
   const priority_list=['low','medium','high']
   const isEdit=Boolean(editState._id)
   useEffect(() => {
    if(editState._id)
    {
        setTitle(editState.title)
        setPrior(editState.priority)
    }
   }, [editState])
   const handleInputChange =(e) =>{
    setTitle(e.target.value)
   }

   const handleClear = () =>{
    setTitle('')
    setPrior('')
   }

   const handleSave = () =>{
    if(!title){
        return
    }
    const obj={
        title,
        priority,
        isCompleted:false
    }
    if(isEdit)
    {
        obj._id=editState._id
        editItem(obj)
    }
    else{
        addItem(obj)
    }
    console.log(priority)
    //addItem(obj)
    setTitle('')
    setPrior('')
    setactive(false)
   }
  

    
   
    return(
        <div className="new-Item-card">
            <div className="checkbox">

            </div>
            <div className="form-container">
                <input placeholder='Type here ....' value={title} onChange={handleInputChange} onClick={()=>setactive(true)}></input>
                
            {isactive?(<div className='badge-container'>
    {priority_list.map((p) => 
    <div key={p} className={`p-badge ${p===priority &&'selected'} ${p}`} onClick={() => setPrior(p)}>
        {p}</div>)}
</div>):''}
{
isactive?(<div className='btn-container'>
<button type="submit" className='btn-primary' onClick={()=>handleSave()}> save</button>
<button type="submit" className='btn-secondary' onClick={handleClear}> Clear </button>
        </div>):''}
            </div>
            </div>
            

       
       
        



    )
}

export default Newitem