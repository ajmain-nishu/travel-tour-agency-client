import React, { useEffect, useState } from 'react';

const MySingleOrder = (props) => {
    const { _id, product } = props?.orders;
    const [singleServices, setSingleServices] = useState([])
    const [cancel, setCencel] = useState(false)
    useEffect(() => {
        fetch('https://ghoulish-demon-66777.herokuapp.com/showusers/')
            .then(response => response.json())
            .then(data => setSingleServices(data))
    }, [cancel])

    const myProducts = singleServices?.filter(item => item?._id === product)
    const itemDelete = id => {
        const proceed = window.confirm('Are you sure want to delete?');
        if (proceed) {
            const uri = `https://ghoulish-demon-66777.herokuapp.com/${id}`

            fetch(uri, {
                method: 'DELETE',
                headers: { "content-type": "application/json" }
            })
                .then(response => response.json())
                .then(data => {
                    if (data?.deletedCount) {
                        alert('Deleted Successfully')
                        setCencel(!cancel);
                    } else {
                        setCencel(false);
                    }
                    window.location.reload()

                })
        }
    }
    return (
        <div className='col-lg-3 col-sm-6 col-12 gy-4 gx-5'>
            
                <div className="p-2 card h-100">

                    

                    

                    <div>
                        <img src={myProducts[0]?.img} className="w-100" alt="" />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">{myProducts[0]?.name}</h2>
                    </div>
                    <button onClick={() => itemDelete(_id)} className='btn btn-outline-secondary'>Delete</button>
                </div>
            
                






        </div>
    );
};

export default MySingleOrder;