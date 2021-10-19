import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';
import { FaAccusoft } from "react-icons/fa";

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <Container>
            <div id="emergenty-service" className="bg-primary p-5">
                <Row>
                    <Col lg={6} sm={12}>
                        <div className="serive-text text-white">
                            <div className="slogan">
                               <div className="img-area">
                               <img src="https://i.ibb.co/SspyHyh/Top-icon1.png" alt="" />
                               </div>
                               <div className="text-area">
                                   <h3 className="text-white mb-2">Emergency Services</h3>
                               </div>
                            </div>
                            <p>An emergency department (ED), also known as an accident & emergency department (A&E), emergency room (ER), emergency ward (EW) or casualty department, is a medical treatment.</p>
                            <div className="call-to-action">
                            Call : +1-2345-3455-33
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} sm={12}>
                        <div className="opening-hour text-white">
                        <div className="slogan">
                               <div className="img-area">
                               <FaAccusoft/>
                               </div>
                               <div className="text-area">
                                   <h3 className="text-white mb-2">Opening hours</h3>
                               </div>
                            </div>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                            <div className="time-table">
                                <div className="time d-flex">
                                    <div className="date">
                                    Mon - Fri
                                    </div>
                                    <div className="hour">
                                    08:00 - 21:0
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div id="services">
            <h2 className="text-primary mt-5">Our services</h2>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
        </Container>
    );
};

export default Services;