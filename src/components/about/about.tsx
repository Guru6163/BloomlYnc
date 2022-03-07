import { useEffect, useState } from "react";
import { SubPageBanner } from "../../helpers/banner";
import Empower from "./Empower";
import MissonAndVision from "./MissonAndVision";
import OurCulture from "./OurCulture";
import OurTeam from "./OurTeam";

function About() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/mockdata/about.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <>
      {data.map((item: any, i: any) => (
        <section key={i}>
          <SubPageBanner Slider={item.subBanner} />
          <Empower data={item.about} />
          <MissonAndVision data={item.mission} />
          <OurCulture data={item.ourCulture} />
          <OurTeam data={item.team} />
        </section>
      ))}
    </>
  );
}

export default About;
