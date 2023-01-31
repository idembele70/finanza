import React from "react";
import PageHeader from "../components/PageHeader";
import ServicesComponent from "../components/Services";
import CallBack from "../components/CallBack";

const Services = () => {
  return (
    <>
      <PageHeader title="Services" />
      <ServicesComponent />
      <CallBack />
    </>
  );
};

export default Services;
