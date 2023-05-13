import React, { useEffect, useState } from 'react';
import './custom.css';
import ToDoList from './custom';


const API_LINK='https://jsonplaceholder.typicode.com/todos';

const App=()=>{
  const [listItems,setListItems]=useState([]);
  const [searchList,setSearch]=useState('');
  const ShowApiData=async(userId)=>{
    const response=await fetch(`${API_LINK}?userId=${userId.toString()}`);
    const data=await response.json();
    console.log(data);
    setListItems(data);
  }

  useEffect(()=>{
    ShowApiData();
  },[]);

  return(
    <div>
      <div>
      <input placeholder="search id" value={searchList}
      onChange={(event)=>setSearch(event.target.value)}
      
      />
      <button onClick={()=>ShowApiData(searchList)}>Search</button>
      </div>
      {
        listItems.map((item)=>
          <ToDoList item={item}/>
        )
      }
    </div>

  );
}
export default App;
