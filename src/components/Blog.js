import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { increment, decrement } from '../redux/index';
const Blog = () => {
  

    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    
    
  return (
    <div>
      <h1>{counter.counter}</h1>
      <button onClick={()=>{dispatch(increment())}}>Increment</button>
      <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
    </div>
  )
}

export default Blog