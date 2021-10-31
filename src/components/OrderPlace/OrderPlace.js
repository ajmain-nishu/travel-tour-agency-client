import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';




const OrderPlace = () => {
    const { user } = useAuth();
    const { serviceId } = useParams()
    const { register, handleSubmit, reset } = useForm();
    const [order, setOrder] = useState([]);
    useEffect(() => {
        fetch(`https://ghoulish-demon-66777.herokuapp.com/showusers`)
            .then(response => response.json())
            .then(data => setOrder(data))
    }, [])
    const search = order?.find(item => item._id === serviceId)
    
    const onSubmit = data => {
        axios.post('https://ghoulish-demon-66777.herokuapp.com/buynow', data)
            .then(res => {
                alert('are you sure add this ?');
                reset();
            })
    };
    return (
        // <div>
            // <h2 className="text-center m-5">Place Order</h2>


        //     <div className="p-3  mx-auto  rounded shadow card col-lg-4">
        //         <div>
        //             <img src={search?.img} className="card-img-top" alt="..." />
        //         </div>
        //         <div className="card-body text-center">
        //             <h5 className="fs-1">{search?.name}</h5>
        //             <p className="card-text fs-4 text-muted">{search?.rating}</p>
        //             <p className="fw-bold "><i>Price: ${search?.price}</i></p>
        //         </div>
        //     </div>



        //     <div className="w-25 m-auto mt-5">
        //         <h5 className='mb-3'>Please provide your information</h5>
        //         <div>
        //             <form onSubmit={handleSubmit(onSubmit)}>
        //                 <input className='mb-2 w-100 form-control' defaultValue={serviceId} {...register("product")} readOnly />
        //                 <input className='mb-2 w-100 form-control' defaultValue={user.displayName} {...register("name")} readOnly />
        //                 <input className='mb-2 w-100 form-control' defaultValue={user.email} {...register("email", { required: true })} readOnly />
        //                 <input className='mb-2 w-100 form-control' {...register("address")} placeholder="Address" required />
        //                 <input className='mb-2 w-100 form-control' {...register("city")} placeholder="City" required />
        //                 <input className='mb-2 w-100 form-control' {...register("phone")} placeholder="Contact" required />
        //                 <br />
        //                 <input className="mb-5 btn btn-outline-secondary btn-lg" type="submit" />
        //             </form>
        //         </div>
        //     </div>
        // </div>












        <div className="my-5">
                <div className="row">
             <h2 className="text-center mb-5">Place Order</h2>
            <div className="col-lg-6">
                 <div className="p-3  mx-auto  rounded shadow card col-lg-6">
                <div>
                     <img src={search?.img} className="card-img-top" alt="..." />
                 </div>
                 <div className="card-body text-center">
                     <h5 className="fs-1">{search?.name}</h5>
                     <p className="card-text fs-4 text-muted">{search?.rating}</p>
                     <p className="fw-bold "><i>Price: ${search?.price}</i></p>
                 </div>
             </div>
            </div>
            <div className="col-lg-6">
                 <div className="w-md-50 w-75 m-auto mt-5">
                 <h5 className='mb-3'>Please provide your information</h5>
                 <div>
                     <form onSubmit={handleSubmit(onSubmit)}>
                         <input className='mb-2 w-100 form-control' defaultValue={serviceId} {...register("product")} readOnly />
                         <input className='mb-2 w-100 form-control' defaultValue={user.displayName} {...register("name")} readOnly />
                         <input className='mb-2 w-100 form-control' defaultValue={user.email} {...register("email", { required: true })} readOnly />
                         <input className='mb-2 w-100 form-control' {...register("address")} placeholder="Address" required />
                         <input className='mb-2 w-100 form-control' {...register("city")} placeholder="City" required />
                         <input className='mb-2 w-100 form-control' {...register("phone")} placeholder="Contact" required />
                         <br />
                     <input className="mb-5 btn btn-outline-secondary btn-lg" type="submit" />
                     </form>
                 </div>
             </div>
            </div>
        </div>
        </div>

        
    );
};



export default OrderPlace;