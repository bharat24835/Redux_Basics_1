import { useState  , useEffect} from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { useSelector , useDispatch } from 'react-redux'
import counterReducer from './feature/counterSlice'
import { decrementBy1 , incrementBy1,decrementByValue,incrementByValue ,reset } from './feature/counterSlice'
import {multiplyByNumber} from './feature/multiplySlice'

function App() {
  const[value , setValue] = useState(0);
  const[num1 , setNum1] = useState(0);
  const[num2 , setNum2] = useState(0);
 const count = useSelector((c)=> c.counter.value)
 const ans = useSelector((c)=> c.multiply.value);
  const dispatch = useDispatch();

  // useEffect(()=>{
  //   setCount(useSelector((c)=>c.counter.value));
  // } , []);

  return (
    <>
    <div><h1>Count is : {count}</h1></div>
    <input type='text' value = {value}  onChange = {(e)=>{setValue(e.target.value)}}  placeholder='Enter the Value'/>
    
    
     <div style={{border :'red'}}>
      <label>Increment it By Given Value</label>
      <br/>
      
      <button type='submit' onClick={(e)=>{dispatch(incrementByValue(value)); setValue(0)}} >Click here </button>
     </div>
     <div style={{border :'red'}}>
      <label>Decrement it By Given Value</label>  
      <br/>
    
      <button type='submit' onClick = {(e)=>{dispatch(decrementByValue(value)) ; setValue(0)}} >Click here </button>
     </div>

     <div style={{border :'red'}}>
     

      <button  onClick={(e)=>{dispatch(incrementBy1())}} >Increment By 1 </button>
     </div>

     <div style={{border :'red'}}>
      <button onClick={(e)=>{dispatch(decrementBy1())}}>Decrement By 1   </button>
     </div>
     <div style={{border :'red'}}>
      <button onClick={(e)=>{dispatch(reset())}}>Reset</button>
     </div>

     <div>
      <h1>Multiply 2 numbers </h1>
      <input type="number" placeholder='Enter number 1'  value={num1} onChange={(e)=>{setNum1(e.target.value)}} />
      <input type="number" placeholder='Enter number 2'  value={num2} onChange={(e)=>{setNum2(e.target.value)}} />
      <button onClick={(e)=>{dispatch(multiplyByNumber([num1 , num2]))}} > Multiply </button>
      {
        <h1>Answer is : {ans}</h1>
      }
     </div>

    </>
  )
}

export default App
