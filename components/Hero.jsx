import React, { useState, useEffect } from "react";

export default function Hero() {
  const [photoGridSrc, setPhotoGridSrc] = useState(null);

  useEffect(() => {
    // Dynamically import the image
    import("../images/photo-grid.png")
      .then((module) => {
        // Set the imported image as the photo grid source
        setPhotoGridSrc(module.default);
      })
      .catch((error) => {
        console.error("Error importing image:", error);
      });
  }, []);

  return (
    <section className="hero">
      {photoGridSrc && (
        <img src={photoGridSrc} className="hero--photo" alt="Photo Grid" />
      )}
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
