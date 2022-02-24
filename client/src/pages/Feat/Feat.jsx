import React from "react";
import { RotatingSquare } from  'react-loader-spinner'

const Feat = () => {
  return (
    <section className="flex flexCenter flexColumn" style={{ height: "80vh" }}>
      <RotatingSquare ariaLabel="rotating-square" visible={true} color="#49494D" />
      <p className="darkFont ">This page is under planning. <br/>Please come back later.</p>
    </section>
  );
};

export default Feat;
