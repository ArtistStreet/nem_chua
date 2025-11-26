import { useState } from "react";
import { useLocation } from "react-router-dom";
import { IoMdClose, IoMdMenu } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { to: "/", label: "Trang chủ" },
    { to: "/gioi-thieu", label: "Giới thiệu" },
    { to: "/san-pham", label: "Sản phẩm" },
    { to: "/tin-tuc", label: "Tin tức" },
    { to: "/lien-he", label: "Liên hệ" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow-lg sticky-top">
      <div className="container">
        {/* Logo */}
        <a href="/" className="navbar-brand">
          <img
            src="/images/logo.png"
            alt="Nem Chua Phương Chi Lê"
            height="60"
            className="rounded-circle border border-3 border-white shadow"
          />
        </a>

        {/* Nút burger cho mobile */}
        <button
          className="navbar-toggler border-0 text-white fs-3"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <IoMdMenu />
        </button>

        {/* Menu - Mobile sẽ hiện khi bấm burger */}
        {isOpen && (
          <div
            className="position-fixed top-0 start-0 w-100 h-100 bg-success bg-opacity-98 d-flex flex-column align-items-center justify-content-start pt-4 z-index-9999"
            style={{ zIndex: 9999 }}
          >
            <button
              className="position-absolute top-0 end-0 btn m-3 text-white fs-3"
              onClick={() => setIsOpen(false)}
              style={{ width: 45, height: 45 }}
            >
              <IoMdClose />
            </button>

            {/* Logo nhỏ */}
            <img
              src="/images/logo.png"
              alt="Logo"
              height="80"
              className="rounded-circle border border-4 border-white shadow-lg mb-4"
            />

            {/* Danh sách menu */}
            <div className="w-100 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.to}
                  href={link.to}
                  className={`nav-link fw-medium fs-5 px-3 py-2 rounded-3 transition-all ${
                    isActive(link.to)
                      ? "bg-white text-success shadow-sm"
                      : "text-white hover-bg-white hover-text-success"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Hotline ở dưới cùng */}
            <a
              href="tel:0945868886"
              className="btn btn-light btn-lg rounded-pill px-5 py-3 mt-5 shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              <i className="bi bi-telephone-fill text-success fs-4"></i>
              <span className="ms-2 fw-bold text-success fs-5">
                0945.868.886
              </span>
            </a>
          </div>
        )}
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
