import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';





const Services = () => {
    const { serviceId } = useParams()
    const [service, setService] = useState([])

    // local fake data fetch
    useEffect(() => {
        const url = "/homeServicesData.json"
        fetch(url)
            .then(res => res.json())
            .then(data => {
                let searchId = data.filter((singledata) => singledata.id === serviceId);
                setService(searchId)

            })
    }, [serviceId])
    return (
        <div>

            {/* matching data mapping */}
            {
                service.map(singleService => (
                    <div>
                        <div className="container">
                            <div className="text-center p-5">

                                {/* image part */}
                                <div>
                                    <img src={singleService.img} alt="" />
                                </div>

                                {/* text part */}
                                <h3 key={singleService.id} className="py-2">Name: {singleService.name}</h3>
                                <h5 className="text-muted py-2"><i>Duration: {singleService.duration}</i></h5>
                                <h3 className="text-decoration-underline">Description</h3>
                                <p className="text-muted">{singleService.description}</p>

                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};





export default Services;