import React from 'react';

class AddContact extends React.Component {
state = {
        name:'',
        email:''
    }


    add =(e)=>{
e.preventDefault();
if(this.state.name === '' || this.state.email === ""){
    alert('all the fields are mendatory')
    return;
}

console.log(this.state)
this.props.addcontacthandler(this.state)
this.setState({name:'',email:''})
    }



render()
    {
        return(
            <div className='ui container center'>
                <h2>Add Contact</h2>
                <form onSubmit={this.add} className='ui form'>
                    <div className='field'>
                        <label>Name</label>
                        <input onChange={(e)=>this.setState({name:e.target.value})}  value={this.state.name} name='name' type="text" placeholder='enter name'/>
                   
                    </div>


                    <div className='field'>
                        <label>email</label>
                        <input onChange={(e)=>this.setState({email:e.target.value})}  value={this.state.email} name='email' type="email" placeholder='enter name'/>
                   
                    </div>
                    <button type='submit' className='ui button blue'>ADD</button>
                </form>
            </div>
        )
    }

}

export default AddContact;