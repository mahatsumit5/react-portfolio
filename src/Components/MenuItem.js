import { Link } from "react-router-dom";
export const MenuItem = ({ href, label }) => {
  return (
    <li>
      <Link className="nav-link" aria-current="page" to={href}>
        {label}
      </Link>{" "}
    </li>
  );
};
