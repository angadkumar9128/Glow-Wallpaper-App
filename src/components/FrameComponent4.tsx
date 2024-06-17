import { useCallback } from "react";
import PropTypes from "prop-types";
import "./frame-component4.css";

const FrameComponent4 = ({ className = "" }) => {
  const onMenuIconClick = useCallback(() => {
    // Please sync "menu [menu:slide]" to the project
  }, []);

  return (
    <section className="header-container-wrapper">
      <div className="header-container">
        <div className="header-content">
          <header className="menu-search">
            <div className="menu-container">
              <img
                className="menu-icon"
                loading="lazy"
                alt=""
                src="/menu.svg"
                onClick={onMenuIconClick}
              />
            </div>
            <div className="profile-icon-parent">
              <div className="profile-icon">
                <img
                  className="profile-image-icon"
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
              </div>
              <b className="angad">Angad</b>
            </div>
          </header>
          <div className="activity-name-flexo-wrapper">
            <h2 className="activity-name">Welcome</h2>
          </div>
          <div className="discover-the-best-wallpapers-f-wrapper">
            <div className="discover-the-best">
              Discover the best Wallpapers for you
            </div>
          </div>
        </div>
        <div className="search-bar-container">
          <div className="search-bar-parent">
            <div className="search-bar">
              <div className="search-bar-child" />
              <div className="search-icon-holder">
                <img
                  className="search-componentsvg-icon"
                  alt=""
                  src="/search-componentsvg.svg"
                />
              </div>
              <input
                className="search-componentinput-text"
                placeholder="Search"
                type="text"
              />
            </div>
            <div className="filter-holder">
              <div className="wrapper-filter">
                <img
                  className="filter-icon"
                  loading="lazy"
                  alt=""
                  src="/filter.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
