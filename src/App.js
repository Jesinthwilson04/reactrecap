import './App.css';



function App() {
  let count=0;
  const onclickLog=()=>{
    count++
    console.log(`button clicked ${count} times`)
  }
  return (
    <div className="App">
      <button onClick={onclickLog}>clickme</button>
    </div>
  );
}

export default App;
