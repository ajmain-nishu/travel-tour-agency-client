import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import MySingleOrder from '../MySingleOrder/MySingleOrder';


// user orders
const MyOrders = () => {
    const {user} = useAuth()
    const [myOrders, setMyOrders] = useState([])

    //api call
    useEffect(() => {
        fetch(`https://ghoulish-demon-66777.herokuapp.com/myOrders`)
        .then(res => res.json())
        .then(data => setMyOrders(data))
    }, [])

    //filter email
    const productItem = myOrders?.filter(item => item.email === user.email)
    return (
        <div>
            <h2 className="text-center my-5">My Total Orders: {productItem.length}</h2>
            {
                user.displayName && <div className='mt-5'>
                {
                    productItem[0] ? <h1 className='my-5 text-center'>Thank you for your orders</h1> 
                    : 
                    <h1 className='my-5 text-center'>You donot have any order</h1>
                }
                <div className="container">
                    <div className="row pb-5">
                        {
                            productItem.map(orders => <MySingleOrder key={orders._id} orders={orders}></MySingleOrder>)
                        }
                    </div>
                </div>
            </div>
            }
        </div>
    );
};

export default MyOrders;