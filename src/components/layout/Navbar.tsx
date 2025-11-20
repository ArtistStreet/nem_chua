import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm py-3 py-lg-4">
      <div className="container position-relative">
        <a
          href="/"
          className="navbar-brand position-absolute top-50 start-50 translate-middle"
        >
          <img src="/images/logo.png" alt="Nem Thanh" height="55" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-nav mx-auto text-center d-lg-flex d-none gap-4">
          <a
            href="/"
            className={`nav-link fw-medium ${
              isActive("/") ? "text-success fw-bold" : "text-black-50"
            }`}
          >
            Trang chủ
          </a>
          <a
            href="/gioi-thieu"
            className={`nav-link fw-medium ${
              isActive("/gioi-thieu") ? "text-success fw-bold" : "text-black-50"
            }`}
          >
            Giới thiệu
          </a>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto gap-4 text-center">
            <a
              href="/san-pham"
              className={`nav-link fw-medium ${
                isActive("/san-pham") ? "text-success fw-bold" : "text-black-50"
              }`}
            >
              Sản phẩm
            </a>
            <a
              href="/tin-tuc"
              className={`nav-link fw-medium ${
                isActive("/tin-tuc") ? "text-success fw-bold" : "text-black-50"
              }`}
            >
              Tin tức
            </a>
            <a
              href="/lien-he"
              className={`nav-link fw-medium ${
                isActive("/lien-he") ? "text-success fw-bold" : "text-black-50"
              }`}
            >
              Liên hệ
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
