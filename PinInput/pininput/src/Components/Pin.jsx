 


   import React, { useRef } from 'react'
import { useState } from 'react'
import PinInput from './PinInput'
    import PropTypes from "prop-types"
   function Pin({length,setPin}) {
      const [inplLength]= useState(new Array(length).fill(1))
      const [value]= useState(new Array(length).fill(""))
       const inpRef=useRef([])
       console.log(inpRef);

        const handleChange=(e,index)=>{
        value[index]=e.target.value
        if(e.target.value.length>0&&index<length-1){
            inpRef.current[index+1].focus()
        }
           setPin(value.join(""))
        }
        const handleBack=(e,index)=>{
            value[index]=e.target.value
            if(index>0){
                inpRef.current[index-1].focus()
            }
            setPin(value.join(""))
        }
        const handlePaste=(e)=>{
           
            const data=e.clipboardData.getData("text").split("").filter((ele,index)=>index<length)
            
            data.forEach((char,index)=>{
                 value[index]=char
                 inpRef.current[index].value=char
                 if (index < length - 1) {
                    inpRef.current[index+1].focus();
                  }
            })
        }
     return (
        <>
       <div>Pin</div>
        <div onPaste={handlePaste}>
       {
        inplLength.map((item,index)=>{
            return <PinInput key={index}
             ref={(ele)=>inpRef.current[index]=ele}
             handleChange={(e)=>handleChange(e,index)}
             handleBack={(e)=>handleBack(e,index)}
            />
        })
       }
         </div>
        </>
     )
   }
   
   export default Pin

  Pin.propTypes={
    length:PropTypes.number.isRequired,
    setPin:PropTypes.func
   }