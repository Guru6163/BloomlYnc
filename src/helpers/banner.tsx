import { Image } from "react-bootstrap";

const SubPageBanner = ({ Slider }: any) => {
  return (
    <>
      {Slider ? (
        <div id="bannerdiv">
          <>
            {Slider.map((item: any, i: any) => (
              <div key={i}>
                <Image
                  src={item.image}
                  className="d-none d-md-block w-100 fixed-height"
                />
                <Image
                  src={item.mobileImage}
                  className="d-block d-md-none w-100"
                />
                <div className="bannerdiv">
                  <h5>{item.title}</h5>
                  {item.content && <p>{item.content}</p>}
                </div>
              </div>
            ))}
          </>
        </div>
      ) : null}
    </>
  );
};

export { SubPageBanner };
