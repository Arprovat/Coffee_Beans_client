import React from 'react';
import swal from 'sweetalert';
import Navber from '../Navber/Navber';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";


const AddCoffee = () => {

    const handleAddCoffee = (e) => { 
        e.preventDefault();
         const form = new FormData(e.target);
         const formData = Object.fromEntries(form.entries());
         console.log(formData);
         fetch('http://localhost:5000/coffees',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
         })
         .then((res) => res.json())
         .then((data) =>{
            console.log(data);
            if(data.insertedId){
                swal({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success",
                    button: "Aww yiss!",
                  });
            }
            e.target.reset();
         })
    }
    return (
        <>
   <div className='max-w-7xl mx-auto'>
   <Navber></Navber>
   </div>
        <div className='md:pt-24 pt-18 flex justify-center items-center'>
            <div className="card bg-[#EFECE4] w-full max-w-4xl shrink-0 shadow-2xl">
               <Link className='ml-4 mt-8 absolute  flex justify-center items-center w-12 h-12 rounded-full hover:bg-slate-200 text-xl' to='/'><IoMdArrowRoundBack/></Link>
               <h1 className='text-4xl mt-8 leading-normal  font-extrabold flex-grow text-center  text-[#331A15]'>Add Coffee</h1>
             
                <form onSubmit={handleAddCoffee} className="card-body ">
                    <div className='flex gap-4 '>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter coffee name" name='name' className="input w-full input-bordered" required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Chef</span>
                            </label>
                            <input type="text" name='chef' placeholder="chef" className="input input-bordered w-full" required />

                        </div></div>
                    <div className='flex gap-4 '>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" placeholder="Enter price of coffee " name='price' className="input w-full input-bordered" required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Time</span>
                            </label>
                            <input type="text" name='time' placeholder="ready time" className="input input-bordered w-full" required />

                        </div>
                    </div>
                    <div className='flex gap-4 '>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <input type="text" name='Supplier' placeholder="Enter Supplier name" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <input type="text" name='Taste' placeholder="Taste" className="input input-bordered w-full" required />

                        </div>
                    </div>
                    <div className='flex gap-4 '>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" placeholder="Enter Category" name='Category' className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text" placeholder="Details"
                            name='Details' className="input input-bordered w-full" required />

                        </div>
                    </div>
                    <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="Quantity" className="input input-bordered w-full" required />

                        </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#D2B48C] text-[#331A15] font-bold">ADD COFFEE</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
};

export default AddCoffee;