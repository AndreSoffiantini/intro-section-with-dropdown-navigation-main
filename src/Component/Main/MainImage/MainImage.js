import "./MainImage.css";
import imgDesktop from "../../../images/image-hero-desktop.png";
import imgMobile from "../../../images/image-hero-mobile.png";

const Picture = () => {
  return (
    <picture className="image_cont">
      <source media="(min-width: 992px)" srcSet={imgDesktop} />
      <img src={imgMobile} alt="Web developer" />
    </picture>
  );
};

export default Picture;
