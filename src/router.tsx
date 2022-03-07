import { lazy, Suspense } from "react";

const Loader = (Component: any) => (props: any) => {
  return (
    <Suspense fallback="Loading">
      <Component {...props} />
    </Suspense>
  );
};

const Home = Loader(lazy(() => import("./components/home/home")));
const Product = Loader(lazy(() => import("./components/product/product")));
const About = Loader(lazy(() => import("./components/about/about")));
const Service = Loader(lazy(() => import("./components/service/service")));
const TestService = Loader(
  lazy(() => import("./components/service/TestService"))
);

const Contact = Loader(lazy(() => import("./components/contact/contact")));

const routes = [
  {
    path: "*",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/development",
    element: <Service />,
  },
  {
    path: "/testing",
    element: <TestService />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
];

export default routes;
