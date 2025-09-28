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

//count event handler
function App() {
  let count=0;
  const onclickLog=(event)=>{
    count++
    console.log(`button clicked ${count} times`)
    console.log(event.target.value)
  }
  //input event handler
  function onSearchChange(event){
    if(event.target.value.length>50)
      {
        event.target.value="exceeded the limit"
      }

    
    console.log(event.target.value.length)
  }
  return (
    <div className="App">
      <button onClick={onclickLog} value={0}>clickme</button>
      <input type="text" onChange={onSearchChange} placeholder='search here'/>
      <ConditionalRender/>
    </div>
  );
}

export default App;
