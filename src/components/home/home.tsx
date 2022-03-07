import { useEffect, useState } from "react";
import { isTemplateExpression } from "typescript";
import { SliderComponent } from "../../helpers/carousel";
import Detail from "./Detail";
import SoftwareDevPractice from "./SoftwareDevPractice";
import SoftwareTestPractice from "./SoftwareTestPractice";
import MentorErp from "./MentorErp";
import Slide from "./Slide";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/mockdata/home.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <>
      {data.map((item: any, i: any) => (
        <section key={i}>
          <SliderComponent data={item} />
          <Detail data={item.Promise} />
          <SoftwareDevPractice dev={item.softwareDevPractice} />
          <SoftwareTestPractice data={item.softwareTestPractice} />
          <MentorErp data={item.mentorErp} />
          <Slide data={item.features} />
        </section>
      ))}
    </>
  );
}

export default Home;
