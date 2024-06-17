import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./container.css";

const Container = ({ className = "" }) => {
  const navigate = useNavigate();

  const onContainerClick = useCallback(() => {
    navigate("/detail-page-01");
  }, [navigate]);

  return (
    <section className="container1" onClick={onContainerClick}>
      <div className="rectangle-parent">
        <div className="frame-inner" />
        <img className="image-icon" loading="lazy" alt="" src="/image@2x.png" />
        <div className="activity-container">
          <div className="activity-name-parent">
            <b className="activity-name1">Alone Feeling</b>
            <div className="frame-parent2">
              <div className="tag-wrapper">
                <img
                  className="tag-icon"
                  loading="lazy"
                  alt=""
                  src="/tag.svg"
                />
              </div>
              <div className="blank-space">{`Rupees `}</div>
              <div className="price">100</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;
