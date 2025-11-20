import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/About";
import ProductsPage from "../pages/Products";
// import NewsPage from "../pages/News/NewsPage";
import ContactPage from "../pages/Contact";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gioi-thieu" element={<AboutPage />} />
      <Route path="/san-pham" element={<ProductsPage />} />
      {/* <Route path="/tin-tuc" element={<NewsPage />} /> */}
      <Route path="/lien-he" element={<ContactPage />} />
    </Routes>
  );
}
