import React from 'react'
import './style.css'
import {connect} from 'react-redux'
const second=(props)=>{

  return(
    <div className='myBorderPaddingMargin'>

   <h1>Seoond</h1>
   </div>
  )
}
functin mapStatetoProps(state){
  return {count:state.counter}
}
export default connect(mapStatetoProps)(second);;