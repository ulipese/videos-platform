import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";

const links = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "Sobre",
  },
  {
    path: "/contact",
    title: "Contato",
  },
];

export const Layout = () => {
  return (
    // <Outlet/> renders the components called by react router by the config of router in the app.jsx
    <>
      <Header links={links} />
      <Outlet />
    </>
  );
};
