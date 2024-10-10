import React from 'react';

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
            e.target.reset();
         })
    }
    return (
        <div className='flex justify-center items-center'>
            <div className="card bg-[#EFECE4] w-full max-w-4xl shrink-0 shadow-2xl">
            <h1 className='text-3xl font-extrabold text-center'>Add Coffee</h1>
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
    );
};

export default AddCoffee;