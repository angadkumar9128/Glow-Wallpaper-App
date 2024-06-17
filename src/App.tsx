import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import DetailPage1 from "./pages/DetailPage1";
import StartPage from "./pages/StartPage";
import PaymentPage from "./pages/PaymentPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/detail-page-01":
        title = "";
        metaDescription = "";
        break;
      case "/detail-page-02":
        title = "";
        metaDescription = "";
        break;
      case "/start-page":
        title = "";
        metaDescription = "";
        break;
      case "/payment-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detail-page-01" element={<DetailPage />} />
      <Route path="/detail-page-02" element={<DetailPage1 />} />
      <Route path="/start-page" element={<StartPage />} />
      <Route path="/payment-page" element={<PaymentPage />} />
    </Routes>
  );
}
export default App;
