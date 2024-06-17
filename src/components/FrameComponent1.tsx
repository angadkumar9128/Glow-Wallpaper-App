import PropTypes from "prop-types";
import "./frame-component1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className="activity-details-wrapper">
      <div className="activity-details1">
        <div className="name-and-image">
          <img
            className="activity-image-icon2"
            loading="lazy"
            alt=""
            src="/activity-image-2@2x.png"
          />
          <img
            className="activity-image-icon3"
            loading="lazy"
            alt=""
            src="/activity-image-3@2x.png"
          />
        </div>
        <div className="container3">
          <b className="activity-name-flexo">Alone Feeling boy Wallpaper</b>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
