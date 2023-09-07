import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [logoSrc, setLogoSrc] = useState(null);

  useEffect(() => {
    // Dynamically import the image
    import("../images/airbnb-logo.png")
      .then((module) => {
        // Set the imported image as the logo source
        setLogoSrc(module.default);
      })
      .catch((error) => {
        console.error("Error importing image:", error);
      });
  }, []);

  return (
    <nav>
      {logoSrc && <img src={logoSrc} className="nav--logo" alt="Airbnb Logo" />}
    </nav>
  );
}
