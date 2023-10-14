import React from "react";
import image from '../images/images.png'

const CardContact =(props)=>{
    const {id,name,email} = props.contact
    return(
        <div className='item'>
            <img className="ui avtar image" height='30' width='40' src={image} alt='user'/>
        <div className='content'>
            <div className='header'>
                {name} </div>
                <div>{email}</div>
           

        </div>
<div style={{paddingBottom:'5%'}}>
<i className='trash alternate outline icon' onClick={()=>props.clickHandler(id)} style={{color:'red',paddingLeft:'50%' ,paddingBottom:'5px'}}></i>
</div>
        
    </div>
    )
}

export default CardContact;