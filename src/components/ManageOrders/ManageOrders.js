import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const ManageOrders = () => {
    
    const [allOrders, setAllOrders] = useState([]);
    const [cencel, setCencel] = useState(false)
    const { user } = useAuth()
    useEffect(() => {
        fetch("https://ghoulish-demon-66777.herokuapp.com/myOrders")
            .then((res) => res.json())
            .then((data) => setAllOrders(data));
    }, [cencel]);
    const itemDelete = (id) => {
        const proceed = window.confirm('Are you want to sure delete?');
        if (proceed) {
            const uri = `https://ghoulish-demon-66777.herokuapp.com/${id}`
            fetch(uri, {
                method: 'DELETE',
                headers: { "content-type": "application/json" }
            })
                .then(res => res.json())
                .then(data => {
                    if (data?.deletedCount) {
                        alert('Deleted Successfully')
                        setCencel(!cencel);
                    } else {
                        setCencel(false);
                    }
                    window.location.reload()
                })
        }
    }
    
    return (
        <div>
            {
                user.email && <div>
                    <h1 className='m-5 text-center'>All User Orders</h1>
                    <table class="table table-hover table-striped w-75 container ">
                        <thead>
                            <tr>
                                <th scope="col">SL No.</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>
                        {allOrders?.map((pd, index) => (
                            <tbody>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{pd?.name}</td>
                                    <td>{pd?.email}</td>
                                    <td>
                                    <button onClick={() => itemDelete(allOrders[index]?._id)} className="btn btn-secondary">Delete</button>
                                    </td>
                                    
                                    
                                </tr>

                                
                            </tbody>
                        ))}

                    </table>
                </div>
            }





        </div>
    );
}

export default ManageOrders;