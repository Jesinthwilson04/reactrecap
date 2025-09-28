import './App.css';


const name="Jesinth"
  
// //function component
// function Button(){
//   const buttonname="clickMe"
//   return (
//     <button onClick={
//       () => console.log("Button Clicked")
//     }> {buttonname}</button>
//   )
// }
//search component
const Search=()=>{
  return(
    <input type="text" placeholder="Search here"/>
)
}
function Header(){
  return(
    <>
    <h1> Header</h1>
    <Search/>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
    </>

  )
}

function App() {
  return (
    <div className="App">
      <h1>Hey {name} !!</h1>
      <Header/>
      {/* <Button/>
      <Search/> */}
    </div>
  );
}

export default App;
