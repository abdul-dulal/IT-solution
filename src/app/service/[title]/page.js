import React from "react";

const ServiceDetails = ({ params }) => {
  console.log(typeof params.title);
  const formattedString = params.title.replace(/%20/g, " ");
  console.log(formattedString);
  return (
    <div>
      <h1>{params.title}</h1>
    </div>
  );
};

export default ServiceDetails;
