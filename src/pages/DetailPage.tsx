import { useCallback } from "react";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import "./detail-page.css";

const DetailPage = () => {
  const navigate = useNavigate();

  const onLayerClick = useCallback(() => {
    navigate("/payment-page");
  }, [navigate]);

  return (
    <div className="detail-page-01">
      <FrameComponent2
        activityImage="/activity-image@2x.png"
        activityImage1="/activity-image-1@2x.png"
      />
      <FrameComponent1 />
      <FrameComponent />
      <section className="layer" onClick={onLayerClick}>
        <Button />
      </section>
    </div>
  );
};

export default DetailPage;
