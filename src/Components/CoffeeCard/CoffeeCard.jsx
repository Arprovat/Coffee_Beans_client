import React from 'react';
import { Link } from 'react-router-dom';

const CoffeeCard = ({coffee,handleDelete}) => {
   
    return (
        <div>
            <div className="card card-side bg-[#F5F4F1] shadow-xl">
  <figure>
    <img
      src={coffee.photoURL}
      alt="Movie" className='h-64 w-48 object-contain' />
  </figure>
  <div className="flex justify-between w-full m-0">
   
    <div className='flex flex-col justify-start items-start mx-8'>
    <h2 className="my-4 text-xl font-bold  card-title">{coffee.name}</h2>
    <p className='mb-4 text-sm font-semibold '>Price: {coffee.price}</p>
    <p className='mb-4 text-sm font-semibold'>Time:{coffee.time}</p>
    <p className='mb-4 text-sm font-semibold'>Chef:{coffee.chef}</p>
    </div>
    <div className="card-actions justify-end  join join-vertical">
   <Link to={`/coffees/${coffee._id}`}>  <button className="btn join-item mb-4">Edit</button>
   </Link>
  <button onClick={()=> handleDelete(coffee._id)} className="btn join-item mb-4">Delete</button>
  <button className="btn join-item m-4"> Details</button>

    </div>
  </div>
</div>
        </div>
    );
};

export default CoffeeCard;