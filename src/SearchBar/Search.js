import { useState } from "react";

const SearchBar = ()=>{

    const[data,setData] = useState([
        {
            name:'ram',
            id:'1',
            city:'pune'
        },
        {
            name:'syam',
            id:'2',
            city:'mumbai'
        },
        {
            name:'ram',
            id:'3',
            city:'pune'
        },
        {
            name:'mohan',
            id:'4',
            city:'agra'
        },
        {
            name:'gita',
            id:'5',
            city:'indore'
        }
    ])//storing whole data

   

    const [record,setRecord] = useState([]) //storing filtering data
    const [inputData, setInputData] = useState('')

    const handleChangeData=(value)=>{
        console.log(value)
        setRecord(data.filter(f=>f.name == value.trim().toLowerCase()))//whole obj data is coming based on condition
       

    }


    return(
        <div>
            <input type='text' placeholder="search here" onChange={(e)=>handleChangeData(e.target.value)}/>
            
            <div>
                {
                    record?.map((data)=>
                    <li>{data.name}</li>
                    )
                }
            </div>
        </div>
    )
}

export default SearchBar;