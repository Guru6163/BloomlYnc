import { useEffect, useState } from "react";

import DevMethod from "./DevMethod";
import TestAutomation from "./TestAutomation";
import TestingService from "./TestingService";
import Banner from "./Banner";

import SoftwareTestPractice from "../home/SoftwareTestPractice";

function Service() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/mockdata/service.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <>
      {data.map((item: any, i: any) => (
        <section key={i}>
          <Banner data={item.banner} />
          <TestingService data={item.testingService} />
          <TestAutomation data={item.testAuto} />
          <SoftwareTestPractice data={item.softwareTestPractice} />
          <DevMethod data={item.QAssurance} />
        </section>
      ))}
    </>
  );
}

export default Service;
