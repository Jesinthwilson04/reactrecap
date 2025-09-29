import React from 'react';
import './App.css';
import { useState } from 'react'; 







//condtional rendering
function ConditionalRender(){

  const isAdmin=true;
  return(
    <div>
      <h2>Conditional Rendering</h2>
      {isAdmin ? <h2>Admin</h2> : <h2>User</h2>}
    </div>
  )
}

//input event handler
function onSearchChange(event){
  if(event.target.value.length>50)
    {
      event.target.value="exceeded the limit"
    }

  
  console.log(event.target.value.length)
}


//count event handler
const onclickLog=(event)=>{
  let count=0;
  count++
  console.log(`button clicked ${count} times`)
  console.log(event.target.value)
}

//names list
function List(){
  const names=['jesi','kann','wila'];

  return (
    <>
    <h2>List Rendering</h2> 
    <ul>
      {names.map(name=> <li key={name}> {name}</li>)}
    </ul>
    <p> 
      {names.map((name)=> name)}
      <br></br>
      {names.map((name,index)=> index===2 ? <strong key={index}> {name} </strong> : <React.Fragment key={index}>{name}</React.Fragment>)}
    </p>
    </>


  )
}

//dash
const Dash = () =>
{
  return <div>-------------------------------------------------------------------------------------------------------------</div>
}



//name and rollno
function NameRoll(){
  const students=[
    {name:'jesi', rollno:1},
    {name:'kann', rollno:2},
    {name:'wils', rollno:3}
  ];
  return (
    <>
    <h2>Name and Rollno</h2>
    <p>
      {
        students.map((student)=>{
          return (<React.Fragment key={student.rollno}> <strong key={student.rollno}>{student.name} : {student.rollno}</strong><br></br></React.Fragment>)
        })
      }
    </p>
    </>
  )
}




//conditional css
function ListItems(){
  const list=['jesi','kann','wils'];
  return(
    <>
    <h2>Conditional CSS</h2>
    <ul>
      {
        list.map((item,index)=>{
          return <li key={index} style={{backgroundColor:index%2===0 ? 'lightgray' : 'white'}}> {item}</li>
        })
      }
    </ul>
    </>
  )
}

//hooks
//usestate
function Counter(){
  const[count,setCount]=useState(0);
  let countnorm=0;

  return(
    <>
    <h2> Usestate hooks</h2>
    <button className='button'  onClick={()=>countnorm++}>CounterButton normal : {countnorm}</button>
    <br></br> <br></br>
    <button className='button' onClick={()=>setCount(count+1)} >CounterButtonhooks : {count}</button>
    </>
  )
}

//main component
function App() {
  return (
    <div className="App">
      <button onClick={onclickLog} value={0}>clickme</button>
      <input type="text" onChange={onSearchChange} placeholder='search here'/>
      <ConditionalRender/>
      <Dash/>
      <List/>
      <Dash/> 
      <NameRoll/>
      <Dash/> 
      <ListItems/>
      <Dash/>
      <Counter/>  
    </div>
  );
}

export default App;
