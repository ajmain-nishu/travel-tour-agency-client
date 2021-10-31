import React from 'react';
import { useForm } from "react-hook-form";

const AddServices = () => {
    const { register, handleSubmit, reset , formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://ghoulish-demon-66777.herokuapp.com/addusers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            alert('are you sure add this')
            reset()
        })
    };
    return (
        <div className="my-5">
            <h2 className="text-center py-5">Add Services Here</h2>
            <form className="w-50 m-auto" onSubmit={handleSubmit(onSubmit)}>
                
                <input className="form-control my-2" type="text" {...register("name")} placeholder="name" />
                
                <input className="form-control my-2" type="number" {...register("price", { required: true })} placeholder="price" />
                <input className="form-control my-2" type="text" {...register("duration")} placeholder="duration" />
                <input className="form-control my-2" {...register("image", { required: true })} placeholder="image link" />
                <input className="form-control my-2" {...register("description", { required: true })} placeholder="description" />
                <input className="form-control my-2" type="text" {...register("rating", { required: true })} placeholder="rating" />
                {errors.exampleRequired && <span>This field is required</span>}
                
                <input className="btn btn-secondary mt-3" type="submit" />
            </form>
        </div>
    );
};

export default AddServices;