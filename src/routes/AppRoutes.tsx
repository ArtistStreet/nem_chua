import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/About";
import ProductsPage from "../pages/Products";
import ProductDetailPage from "../pages/ProductDetailPage";
// import NewsPage from "../pages/News/NewsPage";
import ContactPage from "../pages/Contact";
import NotFoundPage from "../pages/NotFoundPage";
import ThankYouPage from "../pages/ThankYouPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gioi-thieu" element={<AboutPage />} />
      <Route path="/san-pham" element={<ProductsPage />} />
      <Route path="/san-pham/:slug" element={<ProductDetailPage />} />
      {/* <Route path="/tin-tuc" element={<NewsPage />} /> */}
      <Route path="/lien-he" element={<ContactPage />} />
      <Route path="/cam-on" element={<ThankYouPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
