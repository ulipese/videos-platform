import { Link, useLocation } from "react-router-dom";

export const Header = ({ links }) => {
  const location = useLocation();

  return (
    <header>
      <nav>
        <ul>
          {links.map((link, index) => {
            return (
              <li key={index}>
                <Link
                  to={link.path}
                  className={location.pathname === link.path && "selected-link"}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
