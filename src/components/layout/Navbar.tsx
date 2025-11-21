import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow-lg sticky-top">
      <div className="container">
        <a href="/" className="navbar-brand">
          <img
            src="/images/logo.png"
            alt="Nem Chua Phương Chi Lê"
            height="60"
            className="rounded-circle border border-3 border-white"
          />
        </a>

        <div className="navbar-nav mx-auto gap-5 d-none d-lg-flex">
          <a
            href="/"
            className={`nav-link text-white fw-medium fs-5 ${
              isActive("/") ? "text-success fw-medium" : "text-black-50"
            }`}
          >
            Trang chủ
          </a>
          <a
            href="/gioi-thieu"
            className={`nav-link text-white fw-medium fs-5 ${
              isActive("/gioi-thieu")
                ? "text-success fw-medium"
                : "text-black-50"
            }`}
          >
            Giới thiệu
          </a>
          <a
            href="/san-pham"
            className={`nav-link text-white fw-medium fs-5 ${
              isActive("/san-pham") ? "text-success fw-medium" : "text-black-50"
            }`}
          >
            Sản phẩm
          </a>
          <a
            href="/tin-tuc"
            className={`nav-link text-white fw-medium fs-5 ${
              isActive("/tin-tuc") ? "text-success fw-medium" : "text-black-50"
            }`}
          >
            Tin tức
          </a>
          <a
            href="/lien-he"
            className={`nav-link text-white fw-medium fs-5 ${
              isActive("/lien-he") ? "text-success fw-medium" : "text-black-50"
            }`}
          >
            Liên hệ
          </a>
        </div>

        {/* Hotline nổi bật */}
        <div className="d-none d-xl-block">
          <a
            href="tel:0945868886"
            className="btn text-dark bg-light btn-lg rounded-pill px-4 shadow"
          >
            <i className="bi bi-telephone-fill"></i> 0945.868.886
          </a>
        </div>
      </div>
    </nav>
  );
}
