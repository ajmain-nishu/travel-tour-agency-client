import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';


//view all user info
const ManageOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [cencel, setCencel] = useState(false)
    const [status, setStatus] = useState("");
    const { user } = useAuth()



    const handleStatus = (e) => {
        setStatus(e.target.value);
    };

    
    const handleUpdate = (id) => {
        fetch(`https://ghoulish-demon-66777.herokuapp.com/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status }),
        });
    };


    //api call
    useEffect(() => {
        fetch("https://ghoulish-demon-66777.herokuapp.com/myOrders")
            .then((res) => res.json())
            .then((data) => setAllOrders(data));
    }, [cencel]);
    console.log(allOrders)
    //delete button
    const itemDelete = (id) => {
        const proceed = window.confirm('Are you want to sure delete?');
        if (proceed) {
            const uri = `https://ghoulish-demon-66777.herokuapp.com/myOrders/${id}`
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
                    // window.location.reload()
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

                        {/* mapping */}
                        {allOrders?.map((pd, index) => (
                            <tbody>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{pd?.name}</td>
                                    <td className="">{pd?.email}</td>
                                    <td>
                                    <input
                                    onChange={handleStatus}
                                    type="text"
                                    defaultValue={pd.status}
                                    />
                                    </td>
                                    <td>
                                    <button onClick={() => itemDelete(allOrders[index]?._id)} className="btn btn-secondary">Delete</button>
                                    </td>
                                    <td>
                                    <button onClick={() => handleUpdate(allOrders[index]?._id)} className="btn btn-secondary">Update</button>
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