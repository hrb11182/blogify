import React from "react";
import img from "./aboutus.png";

const About = () => {
  return (
    <div>
      <img className="cover-img" src={img} alt="" />
      <div className="about-text">
        <p className="container padding">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, eos sunt voluptate aspernatur voluptatibus reiciendis consequuntur atque optio quaerat esse id nostrum sint, similique, expedita minima magni. Velit, cumque eveniet.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates possimus itaque accusantium voluptas nulla dolores labore a excepturi error delectus deserunt molestiae quis, cupiditate fugiat perspiciatis iure dolorem vitae dolor.
        </p>
      </div>
    </div>
  );
};

export default About;
