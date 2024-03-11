import React from "react";
import NavbarComponent from "../../component/navbar";
import FooterComponent from "../../component/footer";
import ServiceScreen from "../../screens/serviceScreen/service";

function Service() {
  return (
    <>
      <NavbarComponent />
      <ServiceScreen />
      <FooterComponent />
    </>
  );
}

export default Service;
