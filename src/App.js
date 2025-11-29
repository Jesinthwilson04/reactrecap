import React, { use } from 'react';
import './App.css';
import { useState } from 'react'; 
import { useRef } from 'react';
import { useEffect } from 'react';
import Country from './Country';








//condtional rendering
function ConditionalRender(){

  const isAdmin=true;
  return(
    <div>
      <h2>Conditional Rendering</h2>
      <p><code>const isAdmin=true isAdmin ? Admin :User</code></p>
      <p><b>This was the code based as the isAdmin is true it is rendering the Admin if false user will be rendered and displayed</b></p>
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
    <h2>what is useState ? useState is a hook that allows re-rendering of a component when its state changes.</h2>
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
    //decrementing by 3
    setCount((count)=>count-1)
    setCount((count)=>count-1)
    setCount((count)=>count-1)

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


//search hook
function SearchHook(){
  
  const[search,setSearch]=useState('');

  const display = (event) => {
    setSearch(event.target.value);

  }
  return(

    <>
    <h1><u>SEARCH HOOK</u></h1>
    <input type='text' placeholder='search here' onChange={display} style={{padding:'20px',fontSize:'16px',borderRadius:'5px',borderColor:'lightgray',borderWidth:'1px',borderStyle:'solid',color:'black'}}/>
    <p>{search}</p>
    </>
  )
}




//multiple states

function UserDetails(){
  const people={
    name:'',
    age:'',
    email:'',
    phone:''
  }
  const[details,setDetails]=useState(people);

  function nameChangeevent(event){
    setDetails({...details,name:event.target.value})
  }

  function ageChangeevent(event){
    setDetails({...details,age:event.target.value})
  }

  function emailChangeevent(event){
    setDetails({...details,email:event.target.value})
  }

  function phoneChangeevent(event){
    setDetails({...details,phone:event.target.value})
  }

  return(
    <>
    <h1><u>Multiple States</u></h1>
    <ul>
    <li><h3>A component can have multiple variable only if the variable are independent to each other</h3></li>
    <li><h3>In here the name, age, email and phone are dependent to each other</h3></li>
    <li><h3>so we can group them together in an object and use a single state variable to manage them</h3></li>
    <li><h3>and we can use spread operator to update the particular property of the object</h3></li>
    <li><h3>...details is used to copy all the properties of the object and then we can update the particular property</h3></li>
    <li><h3>if we don't use spread operator the other properties will be lost like <code>setDetails(details.name)</code> then the other details gets lost</h3></li>
    </ul>
    <input type="text" placeholder='enter your name' className='input' onChange={nameChangeevent}/>
    <p>Name: {details.name}</p>
    <input type="text" placeholder='enter your age' className='input' onChange={ageChangeevent}/>
    <p>Age: {details.age}</p>
    <input type="text" placeholder='enter your email' className='input' onChange={emailChangeevent}/>
    <p>Email: {details.email}</p>
    <input type="text" placeholder='enter your phone' className='input' onChange={phoneChangeevent}/>
    <p>Phone: {details.phone}</p> 
    </>
  )

}


//search filer
function SearchFilter(){
  const brands=[
    {'id':1,'name':'nike'},
    {'id':2,'name':'adidas'},
    {'id':3,'name':'puma'},
    {'id':4,'name':'reebok'},
    {'id':5,'name':'fila'},
    {'id':6,'name':'asics'},
    {'id':7,'name':'new balance'}
  ]
  //state variable for brands to display dynamically
  const[brand,setBrand]=useState(brands);
  function filterBrand(event){
    //handling case insensitive
    const value=event.target.value.toLowerCase();
    //if search box is empty display all the brands
    if(value.length<=0){
      setBrand(brands);
    }
    //filtering the brands based on the search box value
    else {
      const filteredBrands = brands.filter((brand)=>brand.name.toLowerCase().includes(value));
      if(filteredBrands.length > 0){
        setBrand(filteredBrands);
      } 
      //if no items matches the list shows no items found
      else {
        setBrand([{id: 0, name: 'No items found'}]);
      }
    }
  }

  return(
    <>
    <h1><u>SEARCH FILTER</u></h1>
    <h3>👇you can filter the items by typing in the search box</h3>
    <input type='text'placeholder='search to filter items' onChange={filterBrand}/>  
    <ul>
      {
        brand.map((brand)=><li key={brand.id}>{brand.name}</li>)
      }
    </ul>
    </>
  )
}



//add to cart
function AddToCart(){
  const products=[
    {id:1,name:'nike',price:1000},
    {id:2,name:'adidas',price:2000},
    {id:3,name:'puma',price:1500},
    {id:4,name:'reebok',price:1800},
  ]
  const[cart,setCart]=useState([]);
  //function to add items to cart
  function cartFiller(id){
    const selected=products.find((product)=>product.id===id);
    //check if item already exists in cart
    const exits=cart.find((item)=>item.id===id);
    //if item exists in cart increase the quantity
    if(exits){
      setCart(cart.map((item)=>item.id===id ?{...item,qty:item.qty+1}:item))
    }//if item doesn't exist add the item to cart with quantity 1
    else{
      setCart([...cart,{...selected,qty:1}])
    }
  }
  //function to remove item from cart
  function removeItem(id){
    const updatedCart=cart.filter((item)=>item.id!==id);
    //check if item exists in cart
    const exits=cart.find((item)=>item.id===id);
    //if item exists in cart decrease the quantity
    if(exits.qty>1){
      setCart(cart.map((item)=>item.id===id ?{...item,qty:item.qty-1}:item))
    }//if quantity is 1 remove the item from cart
    else{
      setCart(updatedCart);
    }
  }


  return(
    <>
    <div>
      <h1><u>ADD TO CART</u></h1>
      <p>add brand to your cart</p>
      {products.map((product)=><div>
        <span >{product.name}</span>
        <button  onClick={()=>cartFiller(product.id)}>Add to Cart</button>
       </div>
      )}
      <p>Cart Items:</p>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name} - ₹{item.price} X {item.qty} <button onClick={()=>removeItem(item.id)}>remove</button></li>
        ))}
      </ul>
      <p> Total: ₹{cart.reduce((acc, item) => acc + item.price * item.qty, 0)}</p>


    </div>
    </>
  )
}


//useRef
function UseRefExample(){
  const[start,setStart]=useState(0);
  const[start2,setStart2]=useState(0);
  const timeridref=useRef(null);
  
  let timerid='';
  //function to start the timer
  const timerFunc1=()=>{
    timerid=setInterval(()=>{
      setStart((start)=>start+1)
    },400)
  }

  const timerFunc2=()=>{
    timeridref.current=setInterval(()=>{
      setStart2((start2)=>start2+1)
    },400)}

  //function to stop the timer
  const timerStop=()=>{
    clearInterval(timerid);
        console.log({timerid})
  }
  const timerStop2=()=>{
    clearInterval(timeridref.current);
    console.log({timeridref})

  }


  return(
    <>
    <h1><u>USEREF</u></h1>
    <h4><ul>
      <li>useRef is a React Hook that lets you reference a value that’s not needed for rendering.</li>
      <li>It can be used to store a mutable value that does not cause re-renders when updated.</li>
    </ul>
    </h4 >
    <button onClick={timerFunc1}>Start</button>
    <button onClick={timerStop}>timerStop</button>
    <b>{start}</b><span>👈you cannot stop this</span>
    <h4>why is not stoping because every time re-render the timerid is reset to its initial value<code style={{color:'red'}}>   let timerid='';</code> we cannot access the previous timerid value.if only then can increment the value</h4>
    <button onClick={timerFunc2}>Start</button>
    <button onClick={timerStop2}>timerStop</button>
    <b>{start2}</b><span>👈you can stop this</span>
    <h4>why it is stopping because we are using useRef to store the timer id, <code style={{color:'red'}}>  const timeridref=useRef(null);</code> so it doesn't get reset on re-renders</h4>
    </>
  )
}
//use effect
function UseEffectExample(){
  const[text,setText]=useState('');
  useEffect(()=>{
    setText('useEffect Hook called')
  },[])

  return(
    <>
    <h1><u>USEEFFECT HOOK</u></h1>
    <h4><ul>
      <li>useEffect is a React Hook that lets you perform side effects in function components.</li>
      <li>It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API.</li>
      <li>By using this hook we can perform side effects like data fetching, setting up a subscription, and manually changing the DOM in React components.</li>
      <li>use effect comprises of two part a callback function and a dependency array.</li>
      <li>The callback function contains the side effect logic that we want to perform.</li>
      <li>The dependency array is an optional second argument that specifies when the effect should be re-run.</li>
      <li>If the dependency array is empty the effect runs only once after the initial render.</li>
      <li>If there are dependencies specified in the array the effect runs whenever any of those dependencies change.</li>
    </ul>
    </h4 >
    <h1>{text}</h1>
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
      <SearchHook/>
      <Dash/>
      <UserDetails/>
      <Dash/>
      <SearchFilter/>
      <Dash/>
      <AddToCart/>
      <Dash/>
      <UseRefExample/>
      <Dash/>
      <Country/>
      <Dash/>
      <UseEffectExample/>
    </div>
  );
}

export default App;
