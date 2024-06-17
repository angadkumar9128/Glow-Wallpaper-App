import PropTypes from "prop-types";
import "./frame-component3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div className="frame-parent4">
      <div className="activity-image-parent">
        <img
          className="activity-image-icon4"
          loading="lazy"
          alt=""
          src="/activity-image-21@2x.png"
        />
        <img
          className="activity-image-icon5"
          loading="lazy"
          alt=""
          src="/activity-image-31@2x.png"
        />
      </div>
      <b className="activity-name-flexo1">Rising Sun, girl Wallpaper</b>
      <div className="frame-wrapper1">
        <div className="rectangle-parent1">
          <div className="frame-child1" />
          <div className="frame-parent5">
            <div className="tag-componentsvg-wrapper">
              <img
                className="tag-componentsvg-icon1"
                loading="lazy"
                alt=""
                src="/tag-componentsvg.svg"
              />
            </div>
            <div className="price3">Rs. 150</div>
          </div>
          <div className="frame-parent6">
            <div className="star-wrapper">
              <img
                className="star-icon1"
                loading="lazy"
                alt=""
                src="/star.svg"
              />
            </div>
            <div className="rating1">4.5</div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
