import { useState } from 'react'
import { useSelector,useDispatch  } from 'react-redux'
import { increment,decrement,reset } from './features/counter/counterSlice'


function App() {


const count=useSelector((state)=>state.counter.value)
const dispatch=useDispatch()

  return (
    <>
     
<div style={{textAlign:'center',marginTop:'50px'}}> 


<h1 style={{color:'black'}}>counter:{count}</h1>
<button onClick={()=>dispatch(increment())} type="button">+</button>
<button onClick={()=>dispatch(decrement())} type="button">-</button>
<button onClick={()=>dispatch(reset())} type="button">Reset</button>



</div>





    </>
  )
}

export default App
