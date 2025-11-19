// src/components/layout/Navbar.tsx
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm py-3 py-lg-4">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu bên trái */}
        <div className="navbar-nav mx-auto text-center d-lg-flex d-none gap-4">
          <NavLink
            to="/"
            className="nav-link"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              color: isActive ? "#0d6e0d" : "inherit",
            })}
          >
            Trang chủ
          </NavLink>

          <NavLink
            to="/gioi-thieu"
            className="nav-link"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              color: isActive ? "#0d6e0d" : "inherit",
            })}
          >
            Giới thiệu
          </NavLink>

          <NavLink
            to="/san-pham"
            className="nav-link"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              color: isActive ? "#0d6e0d" : "inherit",
            })}
          >
            Sản Phẩm
          </NavLink>
        </div>

        {/* Logo giữa */}
        <NavLink
          className="navbar-brand mx-auto position-absolute top-50 start-50 translate-middle"
          to="/"
        >
          <img src="/images/logo.png" alt="Nem Thanh" height="55" />
        </NavLink>

        {/* Menu bên phải */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto gap-4">
            <NavLink
              to="/tin-tuc"
              className="nav-link"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
                color: isActive ? "#0d6e0d" : "inherit",
              })}
            >
              Tin tức
            </NavLink>
            <NavLink
              to="/lien-he"
              className="nav-link"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
                color: isActive ? "#0d6e0d" : "inherit",
              })}
            >
              Liên hệ
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
