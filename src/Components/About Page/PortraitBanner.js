import React from "react";
import { ReactComponent as Portrait } from "../../svgs/About Page/Self_Portrait.svg";
import PortraitPhoto from "../../imgs/PortraitPhoto.png";
import "./PortraitBanner.css";

function PortraitBanner(props) {
  return (
    <div className="portrait-banner">
      <div className="portrait-container">
        <Portrait className="portrait" />
        <img src={PortraitPhoto} alt="" className="portrait" />
      </div>
      <div className="portrait-description">
        {/* placeholder for svg, text, or box*/}
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo veniam
          nisi libero eum labore, fuga ipsa, cum numquam, perferendis nostrum
          dignissimos optio! Maxime quasi autem qui officiis corporis,
          aspernatur suscipit?
        </h1>
      </div>
    </div>
  );
}

export default PortraitBanner;
