import React from "react";
import "../../../assets/scss/_header.scss";

const Navbar = () => {
  const navbar = [
    {
      link: "/",
      title: "Home",
    },
    {
      link: "/poster",
      title: "Poster",
    },
    {
      link: "/media",
      title: "Media",
    },
    {
      link: "/films",
      title: "Films",
    },
    {
      link: "/actors",
      title: "Actors",
    },
    {
      link: "/news",
      title: "News",
    },
    {
      link: "/collactions",
      title: "Collactions",
    },

    {
      link: "/categories",
      title: "Categories",
    },
  ];

  return (
    <div className="">
      <div className="container-cinema">sa</div>
    </div>
  );
};

export default React.memo(Navbar);
