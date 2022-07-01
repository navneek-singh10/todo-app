import './ToDo.css';
import { useState } from 'react';
import ShowToDo from './ShowToDo/ShowToDo';

function ToDo() {
    
const [data, setData] = useState("")
const [item, setItem] = useState([])

const inputText=(event) => {
setData(event.target.value)
}

const storeText=(e)=>{
  e.preventDefault()
 const newData = data
 setItem([...item, newData])
 setData("")
}; 
const deleteItems=(id)=>{
  const finalData = item.filter((arr, index)=>{
      return index !== id;
    })
    setItem(finalData)
  }

  return (
 <div className='outer-div'>
  <br/>
  <br/>
 <div className='center-div'>

 <header className="App-header">
   <h1>TO DO</h1>
 </header>
 <form>
   <label className="todolabel">What do you want to do today?</label>
   <br />
   <br/>
   <input type="text" placeholder='Type Something...' className="input" value={data}  onChange={inputText} />
   <button className="button" type="submit" onClick={storeText}>Add</button>
 </form>
 <br/>
 <div>
 {item.map((value, index)=>{
  return (
    <ShowToDo
    key={index}
    id={index}
    text={value}
    del={deleteItems}
    />

  );
 }
 )}
 </div>

 
   
 </div>
</div>
    );
}

export default ToDo;