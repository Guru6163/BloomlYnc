import { useEffect, useState } from "react";
import { SubPageBanner } from "../../helpers/banner";
import Focus from "./Focus";
import Devops from "./Devops";
import SoftwareDevPractice from "../home/SoftwareDevPractice";
import DevMethod from "./DevMethod";
import TestAutomation from "./TestAutomation";
import TestingService from "./TestingService";
import Banner from "./Banner";
import CustomBanner from "./CustomBanner";
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
          <CustomBanner data={item.customBanner} />
          <Focus data={item.focus} />
          <Devops data={item.devops} />
          <SoftwareDevPractice dev={item.softwareDevPractice} />
          <DevMethod data={item.devMethod} />
          {/* <Banner data={item.banner} />
          <TestingService data={item.testingService} />
          <TestAutomation data={item.testAuto} />
          <SoftwareTestPractice data={item.softwareTestPractice} />
          <DevMethod data={item.devMethod} /> */}
        </section>
      ))}
    </>
  );
}

export default Service;
