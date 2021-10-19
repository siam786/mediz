import React from 'react';
import Expert from '../Expert/Expert';

const experts = [
    {
        img: "https://i.ibb.co/sRK5SkG/p-1-1-300x300.jpg",
        name: 'Joshua Clark',
        expertize: 'Anesthesiologist'
    },
    {
        img: "https://i.ibb.co/VJcrcgx/p-9-300x300.jpg",
        name: 'Steven Jacob',
        expertize: 'Anesthesiologist'
    },
    {
        img: "https://i.ibb.co/5s7ZBdk/p-8-300x300.jpg",
        name: 'Emma Bunton',
        expertize: 'Allergist'
    }
   
]

const Experts = () => {
    return (
        <div id="experts" className="container py-5">
            <h2 className="text-black my-5 text-start text-uppercase">Our Doctors</h2>
            <div className="row">
                
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    >

                    </Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;