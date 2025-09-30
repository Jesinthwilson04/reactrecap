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
    <h2><u>Conditional CSS</u></h2>
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
let countnorm=0;
//usestate
function Counter(){
  let[count,setCount]=useState(0);
  let countnorm2=0;
  return(
    <>
    <h1> <u>USESTATE HOOKS</u></h1>
    <h3>👇 This is not a state variable. The button count increases even though it's not a state variable because the component re-renders when a state variable button is clicked. To see changes in such variables, they should be initialized inside the component but outside the function.</h3>
    <br></br> <br></br>
    <button className='button'  >CounterButton normal : {countnorm++}</button>
    <h3>👇 This is also not a state variable. The count doesn't increase because it's initialized inside the function. On each re-render triggered by a state change, the component resets this variable to its initial value. Hence, it remains unchanged.</h3>
    <button className='button'  >CounterButton normal : {countnorm2++}</button>
    <br></br> <br></br>
    <h3> 👇it is a state variable button</h3>
    <button className='button' onClick={()=>setCount(count+1)} >CounterButtonhooks : {count}</button> 
    {count>=10? <h4>Count reached 10 you can only exceed upto 20</h4> : null}
    <br></br> <br></br>
    {count===20 ? setCount(0) : null}

    </>
  )
}


//PROPS

//accessing the variable from parent to child using props
function PropIncrementor(props){
  const{count,setCount}=props;

  function Increment(){
    setCount(count+1)
  }

  return(
    <>
    <h1><u>PROPS</u> </h1>
    <ul>
    <li><h3>Actually the state variable can be used only inside a function component</h3></li>
    <li><h3>here incrementor button is a one component and Decrementor is another component</h3></li>
    <li><h3>if you initialize the count in each component separately it will not work as expected</h3></li>
    <li><h3>then the increment takes place separately and Decrement takes place separately</h3></li>
    <li><h3>but we need increment and Decrement the same variable so the solution is sending the variable from parent component to child component as parameter</h3></li>
    <li><h3>which is nothing but props</h3></li>
    <li><h3>by using the parameter we can use the state variable of parent component in child components</h3></li>
    </ul>
    <button className='button' onClick={Increment}>
      Increment 
    </button>
    <br></br>
    <br></br>
    </>
  )
}
//accessing the variable from parent to child using props
function PropDecrementor(props){
  const{count,setCount}=props;
  
  function Decrement(){
    setCount(count-1)
  } 
  return(
    <>
      <button className='button' onClick={Decrement}>
      Decrement  
     
    </button>
      <h1> count : {count}</h1>
    </>

  )
}





//main component
function App() {
  const[count,setCount]=useState(0);
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
      <Dash/> 
      <PropIncrementor count={count} setCount={setCount}/>  
      <PropDecrementor count={count} setCount={setCount}/>  
      <Dash/>
    </div>
  );
}

export default App;
