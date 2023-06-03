import { MenuItem } from "./MenuItem";
export const NavBar = () => {
  const menuItems = [
    {
      href: "/home",
      label: "Home",
    },
    {
      href: "/skills",
      label: "Skills",
    },
    {
      href: "/projects",
      label: "Projects",
    },
    {
      href: "/about",
      label: "About Me",
    },
    {
      href: "/contact",
      label: "Contact",
    },
  ];
  return (
    <header>
      <div className="flex header" id="header">
        <div className="menu">
          {/* <label for="check" className="menu-icon" id="menu-icon">
            <i className="fa-solid fa-bars"></i>
          </label> */}

          <ul className="navigation flex">
            {menuItems.map((item) => (
              <MenuItem href={item.href} label={item.label} />
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};
