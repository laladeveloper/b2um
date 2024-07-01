// src/admin/pages/create/IconstSelector.jsx
import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as GiIcons from "react-icons/gi";
import * as IoIcons from "react-icons/io";
import { IconContext } from "react-icons";
import "./IconSelector.css";


const IconSelector = ({ onIconSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const allIcons = {
    ...FaIcons,
    ...MdIcons,
    ...GiIcons,
    ...IoIcons,
  };

  const iconKeys = Object.keys(allIcons);

  const filteredIcons = iconKeys.filter((iconKey) =>
    iconKey.toLowerCase().includes(searchTerm?.toLowerCase())
  );

  return (
    <div className="iconsdiv">
      <input
        type="text"
        placeholder="Search icons..."
        className="iconsearchinput"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm ? 
      <div
        style={{ display: "flex", flexWrap: "wrap" }}
        className="iconcontainer"
      >
        {filteredIcons.map((iconKey) => {
          const IconComponent = allIcons[iconKey];
          return (
            <div
              key={iconKey}
              style={{ margin: "10px", cursor: "pointer" }}
              onClick={() => onIconSelect(iconKey)}
              className=" icons"
            >
              <div className="item">
                <div className="icon">
                  <IconContext.Provider value={{ size: "2em" }}>
                    <IconComponent />
                  </IconContext.Provider>
                </div>
                <p className="mt-1">{iconKey}</p>
              </div>
            </div>
          );
        })}
      </div> : null }
    </div>
  );
};

export default IconSelector;
