import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

// you also can get hex value inside color obj

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hex = rgbToHex(...rgb);

  useEffect(() => {
    const timeOut = setTimeout(() => setAlert(false), 2000);
    return () => clearTimeout(timeOut);
  }, [alert]);

  return (
    <article
      className={`color ${index > 20 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hex);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
      {alert && <p className="alert">Copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
