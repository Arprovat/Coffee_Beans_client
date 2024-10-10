import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateCoffe = () => {
    const update = useLoaderData();
    const handleUpdate =(e)=>{
   e.preventDefault();
   const form = new FormData(e.target)
   const data = Object.fromEntries(form.entries());

   fetch(`http://localhost:5000/coffees/${update._id}`,{
    method: 'PUT',
    headers:{ 'content-type': 'application/json'},
     body: JSON.stringify(data)
   }).then(response => response.json())
   .then(data => {
    if(data.modifiedCount){
        swal({
            title: "Successfully updated!",
            icon: "success",
            button: "ok",
          });
    }
   })

    }
    return (
        <div className='flex justify-center items-center'>
             <div className="card bg-[#EFECE4] w-full max-w-4xl shrink-0 shadow-2xl">
            <h1 className='text-3xl font-extrabold text-center'>Update Coffee {update.name}</h1>
                <form onSubmit={handleUpdate}  className="card-body ">
                    <div className='flex gap-4 '>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" defaultValue={update.name}  placeholder="Enter coffee name" name='name' className="input w-full input-bordered" required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Chef</span>
                            </label>
                            <input type="text" defaultValue={update.chef}  name='chef' placeholder="chef" className="input input-bordered w-full" required />

                        </div></div>
                    <div className='flex gap-4 '>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" defaultValue={update.price}  placeholder="Enter price of coffee " name='price' className="input w-full input-bordered" required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Time</span>
                            </label>
                            <input type="text" defaultValue={update.time}  name='time' placeholder="ready time" className="input input-bordered w-full" required />

                        </div>
                    </div>
                    <div className='flex gap-4 '>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <input type="text" defaultValue={update.Supplier}  name='Supplier' placeholder="Enter Supplier name" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <input type="text" defaultValue={update.taste}  name='Taste' placeholder="Taste" className="input input-bordered w-full" required />

                        </div>
                    </div>
                    <div className='flex gap-4 '>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" defaultValue={update.Category}  placeholder="Enter Category" name='Category' className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text"  defaultValue={update.Details} placeholder="Details"
                            name='Details' className="input input-bordered w-full" required />

                        </div>
                    </div>
                    <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text"  defaultValue={update.photoURL} name='photoURL' placeholder="Quantity" className="input input-bordered w-full" required />

                        </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#D2B48C] text-[#331A15] font-bold">ADD COFFEE</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffe;