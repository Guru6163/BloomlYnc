import { useEffect, useState } from "react";
import { SliderComponent } from "../../helpers/carousel";
import OurCloud from "./OurCloud";
import WhatMakesERP from "./WhatMakesERP";
import DriveEff from "./DriveEff";
import Collaboration from "./Collaboration";
import Anytime from "./Anytime";
import SasModel from "./SasModel";
import HomeBottom from "./HomeBottom";

function Product() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/mockdata/mentorerp.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <>
      {data.map((item: any, i: any) => (
        <section key={i}>
          <SliderComponent data={item} />
          <OurCloud data={item.ourCloud} />
          <WhatMakesERP data={item.mentorERP} />
          <DriveEff data={item.driveEff} />
          <Collaboration data={item.collaboration} />
          <Anytime data={item.anytime} />
          <SasModel data={item} />
          <HomeBottom />
        </section>
      ))}
    </>
  );
}

export default Product;
