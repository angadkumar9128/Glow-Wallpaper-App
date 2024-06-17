import { useCallback } from "react";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent3 from "../components/FrameComponent3";
import { useNavigate } from "react-router-dom";
import "./detail-page1.css";

const DetailPage1 = () => {
  const navigate = useNavigate();

  const onLayerClick = useCallback(() => {
    navigate("/payment-page");
  }, [navigate]);

  return (
    <div className="detail-page-02">
      <FrameComponent2
        activityImage="/activity-image1@2x.png"
        activityImage1="/activity-image-11@2x.png"
        frameSectionPadding="0px var(--padding-5xs)"
        frameDivPadding="var(--padding-7xs) 0px 0px"
        backColor="#000"
      />
      <div className="container" />
      <section className="frame-parent">
        <FrameComponent3 />
        <div className="while-each-and">
          While each and every sunrise literally marks the beginning of a new
          day, it also reminds us that we, too, can start fresh with a good
          attitude, positivity, and gratitude.
        </div>
      </section>
      <section className="layer1" onClick={onLayerClick}>
        <div className="button">
          <div className="button-background" />
          <b className="book-now">Buy Now</b>
        </div>
      </section>
    </div>
  );
};

export default DetailPage1;
