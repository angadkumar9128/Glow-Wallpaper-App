import FrameComponent4 from "../components/FrameComponent4";
import Container from "../components/Container";
import ImageContainer from "../components/ImageContainer";
import "./home-page.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <FrameComponent4 />
      <Container />
      <ImageContainer />
    </div>
  );
};

export default HomePage;
