import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./frame-component2.css";

const FrameComponent2 = ({
  className = "",
  activityImage,
  activityImage1,
  frameSectionPadding,
  frameDivPadding,
  backColor,
}) => {
  const frameSectionStyle = useMemo(() => {
    return {
      padding: frameSectionPadding,
    };
  }, [frameSectionPadding]);

  const frameDivStyle = useMemo(() => {
    return {
      padding: frameDivPadding,
    };
  }, [frameDivPadding]);

  const backStyle = useMemo(() => {
    return {
      color: backColor,
    };
  }, [backColor]);

  const navigate = useNavigate();

  const onArrowContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <section className="detail-page-01-inner" style={frameSectionStyle}>
      <div className="frame-parent3">
        <div className="arrow-parent">
          <div className="arrow" onClick={onArrowContainerClick}>
            <div className="arrow-child" />
            <img
              className="chevron-left-icon"
              loading="lazy"
              alt=""
              src="/chevronleft.svg"
            />
          </div>
          <div className="back-wrapper" style={frameDivStyle}>
            <a className="back" style={backStyle}>
              Back
            </a>
          </div>
        </div>
        <div className="image-wrapper-wrapper">
          <div className="image-wrapper">
            <img
              className="activity-image-icon"
              loading="lazy"
              alt=""
              src={activityImage}
            />
            <img
              className="activity-image-icon1"
              loading="lazy"
              alt=""
              src={activityImage1}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  activityImage: PropTypes.string,
  activityImage1: PropTypes.string,

  /** Style props */
  frameSectionPadding: PropTypes.any,
  frameDivPadding: PropTypes.any,
  backColor: PropTypes.any,
};

export default FrameComponent2;
