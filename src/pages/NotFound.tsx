import React, { useLayoutEffect, useRef } from "react";
import PageHeader from "../components/PageHeader";
import NotFoundComponent from "../components/NotFound";
import { gsap } from "gsap";

const NotFound = () => {
  return (
    <>
      <PageHeader title="404 Error" />
      <NotFoundComponent />
    </>
  );
};

export default NotFound;
