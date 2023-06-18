export const SideMenu = () => {
  const links = [
    {
      link: "www.facebook.com",
      className: "fa-brands fa-square-facebook",
    },
    {
      link: "https://www.linkedin.com/in/mahat-sumit-9421381a3/",
      className: "fa-brands fa-linkedin",
    },
    {
      link: "https://www.instagram.com/mahatsumit99",
      className: "fa-brands fa-instagram",
    },
    {
      link: "www.telegram.com",
      className: "fa-brands fa-telegram",
    },
    {
      link: "www.telegram.com",
      className: "fa-brands fa-github",
    },
  ];
  return (
    <div className="SideMenu">
      <ol className="link">
        {links.map((icon, index) => (
          <li key={index}>
            <a href={icon.link} target="_blank" rel="noreferrer">
              <i className={icon.className}></i>
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
};
