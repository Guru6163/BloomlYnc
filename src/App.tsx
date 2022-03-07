import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./router";
import Header from "./layout/master/header";
import Footer from "./layout/master/footer";
import { Button } from "react-bootstrap";
import scrolltop from "./assets/static/images/Scroll_Top_Arrow.svg";
import { useEffect, useState } from "react";

function App() {
  const pages = useRoutes(routes);
  const [bodyScroll, setBodyScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setBodyScroll(window.scrollY > 100);
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <Header />
      <section className="main-page flex-shrink-0">{pages}</section>
      <Footer />
      <Button
        variant="default"
        onClick={scrollTop}
        className="scrollTop"
        id="scrollTop"
        title="Go to top"
        style={{ display: bodyScroll ? "block" : "none" }}
      >
        <img src={scrolltop} alt={scrolltop} />
      </Button>
    </div>
  );
}

export default App;
