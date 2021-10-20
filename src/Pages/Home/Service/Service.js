import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./Service.css";
import { IconContext } from "react-icons";

const Service = ({ service }) => {
  // const {service} = props;
  const { id,name,description,img } = service;
  return (
    <div className="service p-4 text-start">
      <img className="text-start pb-4" src={img} alt="" />
      <h3>{name}</h3>
      <p className="py-3">{description}</p>
      <Link to={`/details/${id}`}>
        <div className="text-primary my-4 d-flex justify-content-between align-items-center w-50">
          <div className="learn">
          Learn More
            </div> 
            <div className="icon">
            <IconContext.Provider value={{ size:'1em',color: "blue", className: "global-class-name" }}>
            <FaArrowRight/>
            </IconContext.Provider>
            </div>
        </div>
      </Link>
    </div>
  );
};

export default Service;
