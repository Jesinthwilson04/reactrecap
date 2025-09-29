import './App.css';
//condtional rendering
function ConditionalRender(){
  const isAdmin=true;
  return(
    <div>
      {isAdmin ? <h1>Admin</h1> : <h1>User</h1>}
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


function List(){
  const names=['jesi','kann','wila'];

  return (
    <>
    <ul>
      {names.map(name=> <li key={name}> {name}</li>)}
    </ul>
    <p>
      {names.map((name)=> name)}
      {names.map((name,index)=> index===2 ? <strong> {name}</strong> : <>{name}</>)}
    </p>
    </>


  )
}


function App() {
  return (
    <div className="App">
      <button onClick={onclickLog} value={0}>clickme</button>
      <input type="text" onChange={onSearchChange} placeholder='search here'/>
      <ConditionalRender/>
      <List/>
    </div>
  );
}

export default App;
