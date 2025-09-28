import './App.css';



function App() {
  let count=0;
  const onclickLog=(event)=>{
    count++
    console.log(`button clicked ${count} times`)
    console.log(event.target.value)
  }
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
    </div>
  );
}

export default App;
