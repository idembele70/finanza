import React from "react";
import PageHeader from "../components/PageHeader";
import NotFoundComponent from "../components/NotFound";

const NotFound = () => {
  return (
    <>
      <PageHeader title="404 Error" />
      <NotFoundComponent />
    </>
  );
};

export default NotFound;
