import React, { useState } from "react";
import "./Carousel.style.scss";
import Previous from "../../assets/Caroussel_arrow_back.png";
import Next from "../../assets/Carousel_arrow_next.png";

function Carousel({ pictures }) {
  const [picture, setPicture] = useState(0);

  return (
    <div className="carousel">
      {pictures.length > 1 && (
        <div
          className="carousel__btn carousel__btn--previous"
          onClick={() =>
            setPicture((picture - 1 + pictures.length) % pictures.length)
          }
        >
          <img src={Previous} alt="Précédent" />
        </div>
      )}

      <img className="carousel__img" src={pictures[picture]} />

      {pictures.length > 1 && (
        <div
          className="carousel__btn carousel__btn--next"
          onClick={() => setPicture((picture + 1) % pictures.length)}
        >
          <img src={Next} alt="Suivant" />
        </div>
      )}
    </div>
  );
}

export default Carousel;
