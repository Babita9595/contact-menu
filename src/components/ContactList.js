import React from 'react';
import CardContact from './ContactCard';

const ContactList =(props)=>{


    const deleteContactHandler =(id)=>{
        props.getContactId(id)
    }

    const rendercontactlist = props.contacts.map((contact)=>
   
    

       {
        return(
            <CardContact contact={contact} clickHandler={deleteContactHandler} key={contact.id}></CardContact>
        )
       }
    )
return(
    <div className='ui celled list'>
       {rendercontactlist}
    </div>
)

}

export default ContactList;