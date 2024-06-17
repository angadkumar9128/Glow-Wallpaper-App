import PropTypes from "prop-types";
import "./button.css";

const Button = ({ className = "" }) => {
  return (
    <div className="button3">
      <div className="button-background1" />
      <b className="book-now1">Buy Now</b>
    </div>
  );
};

Button.propTypes = {
  className: PropTypes.string,
};

export default Button;
