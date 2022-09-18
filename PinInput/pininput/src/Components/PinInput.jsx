


import React from 'react'
import { forwardRef } from 'react'

const PinInput= forwardRef(({handleChange,handleBack},ref)=> {

    const handlkey=(e)=>{
        console.log(e.target.value);
        if(e.keyCode===8&&!e.target.value){
            handleBack(e)
        }
        else{
            handleChange(e)
        }
    }

  return (
      <input maxLength={1} ref={ref} onKeyUp={handlkey}  />
  )
})

export default PinInput