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
const Search=()=>{
  return(
    <input type="text" placeholder="Search here"/>
)
}
function App() {
  return (
    <div className="App">
      <h1>Hey {name} !!</h1>
      <Button/>
      <Search/>
    </div>
  );
}

export default App;
