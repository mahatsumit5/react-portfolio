export const SideMenu = () => {
  const links = [
    {
      link: "www.facebook.com",
      className: "fa-brands fa-square-facebook",
      color: "#3B5998",
    },
    {
      link: "https://www.linkedin.com/in/mahat-sumit-9421381a3/",
      className: "fa-brands fa-linkedin",
      color: "#0072b1",
    },
    {
      link: "https://www.instagram.com/mahatsumit99",
      color: "",
      className: "fa-brands fa-instagram",
    },
    {
      link: "www.telegram.com/MAHATSUMIT",
      color: "#0088cc",
      className: "fa-brands fa-telegram",
    },
    {
      link: "www.github.com/mahatsumit5",
      color: "#171515",
      className: "fa-brands fa-github",
    },
  ];
  return (
    <div className="SideMenu">
      {links.map((icon, index) => (
        <div key={index} className="p-2" style={{ background: icon.color }}>
          <a href={icon.link} target="_blank" className="fs-3 sideIcon">
            <i className={icon.className}></i>
          </a>
        </div>
      ))}
    </div>
  );
};
