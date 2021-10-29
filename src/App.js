import React ,{useState} from 'react';
import ToDoList from './ToDoList';


const App = () =>{

  const [inputList , setInputList] = useState("");
  const [items,setItems] = useState([]);

  const itemEvent = (event)=>{
    setInputList(event.target.value);
  };

  const listOfItems = () =>{
    setItems((oldItems) => {
      return [...oldItems,inputList]
    });
    setInputList('');
  }

  const deleteItem = (id) =>{
    setItems((oldItems) => {
      return oldItems.filter((curr,ind) =>{
        return ind !== id;
      })
    });
  }
  return(
    <>
      <div className= "main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder='Add Items' onChange ={itemEvent} value ={inputList} />
          <button onClick={listOfItems}> + </button>

          <ol>
            {/* <li> {inputList} </li> */}

            {items.map((itemval,index) => {
              return  <ToDoList 
              key={index} 
              text = {itemval} 
              id={index}
              onSelect={deleteItem} />;
            })}

          </ol>
        </div>
      </div>
    </>
  )
} 

export default App;
