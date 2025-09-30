import React from 'react';
import './App.css';
import { useState } from 'react'; 







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

  function cartFiller(id){
    const selected=products.find((product)=>product.id===id);
    const exits=cart.find((item)=>item.id===id);
    if(exits){
      setCart(cart.map((item)=>item.id===id ?{...item,qty:item.qty+1}:item))
    }
    else{
      setCart([...cart,{...selected,qty:1}])
    }
    console.log(cart)
  }
  function removeItem(id){
    const updatedCart=cart.filter((item)=>item.id!==id);
    const exits=cart.find((item)=>item.id===id);
    if(exits.qty>1){
      setCart(cart.map((item)=>item.id===id ?{...item,qty:item.qty-1}:item))
    }
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
    </div>
  );
}

export default App;
