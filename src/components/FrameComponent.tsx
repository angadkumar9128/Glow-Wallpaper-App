import PropTypes from "prop-types";
import "./frame-component.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className="description-wrapper-parent">
      <div className="description-wrapper">
        <div className="description-wrapper-child" />
        <div className="description-content">
          <div className="tag-and-price">
            <img
              className="tag-componentsvg-icon"
              loading="lazy"
              alt=""
              src="/tag-componentsvg.svg"
            />
          </div>
          <div className="price2">Rs. 100</div>
        </div>
        <div className="star-rating-parent">
          <div className="star-rating">
            <img className="star-icon" loading="lazy" alt="" src="/star.svg" />
          </div>
          <div className="rating">4.5</div>
        </div>
      </div>
      <div className="container4">
        <div className="do-you-feel">
          Do you feel alone? Do you feel like no one understands you? Do you
          wish someone could hold your hand and tell you everything will be
          okay?
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
