import { useEffect, useState } from "react";
import { SubPageBanner } from "../../helpers/banner";
import MentorERP from "./MentorERP";
import JoinNetwork from "./JoinNetwork";
import TechnologyPartners from "./TechnologyPartners";

import Benefits from "./Benefits";
import ContactUs from "./ContactUs";

function Contact() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/mockdata/contact.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <>
      {data.map((item: any, i: any) => (
        <section key={i}>
          <SubPageBanner Slider={item.subBanner} />
          <MentorERP data={item} />
          <Benefits data={item.benefits} />
          <JoinNetwork data={item.joinNetwork} />
          <TechnologyPartners/>
          <ContactUs data={item.address} />

        </section>
      ))}
    </>
  );
}

export default Contact;
