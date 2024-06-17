import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./start-page.css";

const StartPage = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="start-page">
      <section className="start-page-inner">
        <div className="frame-group">
          <div className="welcome-1-wrapper">
            <img
              className="welcome-1-icon"
              loading="lazy"
              alt=""
              src="/welcome-1@2x.png"
            />
          </div>
          <div className="to-wrapper">
            <h1 className="to">To</h1>
          </div>
          <img
            className="screenshot-2024-06-16-211452-1"
            loading="lazy"
            alt=""
            src="/screenshot-20240616-211452-1@2x.png"
          />
        </div>
      </section>
      <section className="frame-container">
        <div className="frame-wrapper">
          <div className="frame-div">
            <div className="create-an-account-wrapper">
              <h3 className="create-an-account">Create an account</h3>
            </div>
            <div className="enter-your-email">
              Enter your email to sign up for this app
            </div>
          </div>
        </div>
        <div className="field-button-primary-wrapper">
          <div className="field-button-primary">
            <div className="field">
              <input
                className="label"
                placeholder="email@domain.com"
                type="text"
              />
            </div>
            <button className="button1" onClick={onButtonClick}>
              <div className="primary">Sign up with email</div>
            </button>
          </div>
        </div>
        <div className="frame-parent1">
          <div className="rectangle-wrapper">
            <div className="frame-child" />
          </div>
          <div className="or-continue-with">or continue with</div>
          <div className="rectangle-container">
            <div className="frame-item" />
          </div>
        </div>
        <div className="button-wrapper">
          <div className="button2" onClick={onButtonClick}>
            <div className="google-wrapper">
              <img
                className="google-icon"
                loading="lazy"
                alt=""
                src="/google.svg"
              />
            </div>
            <div className="google">Google</div>
          </div>
        </div>
        <div className="by-clicking-continue-container">
          <span>{`By clicking continue, you agree to our `}</span>
          <span className="terms-of-service">Terms of Service</span>
          <span>{` and `}</span>
          <span className="privacy-policy">Privacy Policy</span>
        </div>
      </section>
    </div>
  );
};

export default StartPage;
