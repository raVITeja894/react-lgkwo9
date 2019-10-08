import React from 'react'
import './style.css'
import {connect} from 'react-redux';
const first=(props)=>{

  return(
    <div className='myBorderPaddingMargin'>

   <p>First</p>
   <h2>{props.count}</h1>
   </div>
  )
}
functin mapStatetoProps(state){
  return {count:state.counter}
}
export default connect(mapStatetoProps)(first);