import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CoffeeCard from '../CoffeeCard/CoffeeCard';

const Root = () => {
    const coffees = useLoaderData();
    const handleDelete =(id)=>{
        console.log(id);
        fetch(`http://localhost:5000/coffees/${id}`,{
            method: 'DELETE',
        
        }).then((res)=> res.json())
        .then((data)=>console.log(data))
    }
    return (
        <div>
this is root
<Link to='/add_coffee'><button>ADD Coffee</button></Link>
<div className='grid md:grid-cols-2 grid-cols-1 gap-8' >
{
    coffees.map ( (coffee) =><CoffeeCard key={coffee._id} handleDelete={handleDelete} coffee={coffee}></CoffeeCard>)
}
</div>
        </div>
    );
};

export default Root;