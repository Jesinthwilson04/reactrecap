import './App.css';


const name="Jesinth"
  
//function component
function Button(){
  const buttonname="clickMe"
  return (
    <button onClick={
      () => console.log("Button Clicked")
    }> {buttonname}</button>
  )
}
function App() {
  return (
    <div className="App">
      <h1>Hey {name} !!</h1>
      <Button/>
    </div>
  );
}

export default App;
