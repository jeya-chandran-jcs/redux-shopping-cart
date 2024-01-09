import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API } from './Global';
import Expenditure from './random/Expenditure';
import { useSelector } from 'react-redux';

function App() {
  let state=useSelector((state)=>state.mycapture)
/////////////////////////////////////////////////////////////////////
  const [data,getdata]=useState([])
  const getData=async()=>{
      try{
          const response= await axios.get(`${API}`)
          getdata(response.data)
          console.log("data",response.data)
      }
      catch(err){
          console.log("err gett data",err)
      }
  }
  useEffect(()=>{
      getData()
  },[])
  return (
    <div className="App">
      {state.products.map((item,index)=>(
        <Form item={item}  index={index}/>
      ))}
     {/* <Expenditure /> */}
    </div>
  );
}

export default App;
