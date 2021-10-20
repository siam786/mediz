import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Details = () => {
  const { detailsId } = useParams();
  const [details, setDetails] = useState({});
  const {title,description} = details

  useEffect(() =>{
      const url =`https://raw.githubusercontent.com/siam786/json/main/details/${detailsId}`;
      fetch(url)
      .then(res => res.json())
      .then(data => setDetails(data));
  },[])
  return (
    <div>
      <h2>
        This is details page {detailsId}
        {title}
      </h2>
      <p>website name: {description}</p>
    </div>
  );
};

export default Details;
