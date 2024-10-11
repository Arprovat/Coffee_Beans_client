import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CoffeeCard from '../CoffeeCard/CoffeeCard';
import swal from 'sweetalert';
import banner from '../../assets/banner.jpg'

import Navber from '../Navber/Navber';
import Banner from '../Banner/Banner';

const Root = () => {
    const coffee = useLoaderData();
    const [coffees,setCoffees] = useState(coffee);
    const handleDelete = (id) => {
        console.log(id);
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/coffees/${id}`, {
                        method: 'DELETE',

                    }).then((res) => res.json())
                        .then((data) => {
                           const remaincoffee = coffees.filter(c => c._id !== id)
                           setCoffees(remaincoffee);
                            swal("Poof! Your imaginary file has been deleted!", {
                                icon: "success",
                            });
                        })
                } else {
                    swal("Your product  is safe!");
                }
            });

    }
    return (
        <div className='max-w-7xl mx-auto'>
          <Banner></Banner>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-8 mx-4' >
                {
                    coffees.map((coffee) => <CoffeeCard key={coffee._id} handleDelete={handleDelete} coffee={coffee}></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Root;