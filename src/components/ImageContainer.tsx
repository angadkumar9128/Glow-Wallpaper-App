import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./image-container.css";

const ImageContainer = ({ className = "" }) => {
  const navigate = useNavigate();

  const onContainerClick = useCallback(() => {
    navigate("/detail-page-01");
  }, [navigate]);

  return (
    <section className="image-container">
      <div className="container2" onClick={onContainerClick}>
        <div className="rectangle-group">
          <div className="rectangle-div" />
          <img
            className="image-icon1"
            loading="lazy"
            alt=""
            src="/image-1@2x.png"
          />
          <div className="activity-details">
            <b className="activity-name2">Rising Destiny</b>
            <div className="tag-price">
              <div className="tag-holder">
                <img
                  className="tag-icon1"
                  loading="lazy"
                  alt=""
                  src="/tag.svg"
                />
              </div>
              <div className="spacer">{`Rupees `}</div>
              <div className="price1">100</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ImageContainer.propTypes = {
  className: PropTypes.string,
};

export default ImageContainer;
