// src/components/layout/Footer.tsx
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row gy-4">
          {/* Cột 1: Logo + Giới thiệu ngắn */}
          <div className="col-lg-4">
            <NavLink to="/" className="d-inline-block mb-3">
              <img src="/images/logo-white.png" alt="Nem Thanh" height="70" />
              {/* Nếu chưa có logo trắng thì dùng logo thường cũng được */}
            </NavLink>
            <p className="text-white-50 small">
              Nem Thanh – Đặc sản nem chua Thanh Hóa chính gốc.
              <br />
              Được làm 100% thủ công, lên men tự nhiên, không chất bảo quản.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-white fs-4">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-white fs-4">
                <i className="bi bi-zalo"></i>
              </a>
              <a href="#" className="text-white fs-4">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="#" className="text-white fs-4">
                <i className="bi bi-tiktok"></i>
              </a>
            </div>
          </div>

          {/* Cột 2: Liên kết nhanh */}
          <div className="col-lg-4">
            <h5 className="text-success fw-bold mb-3">Liên hệ với chúng tôi</h5>
            <p className="text-white-50 small mb-2">
              <i className="bi bi-geo-alt-fill"></i>
              Quan Sơn - Phường An Hưng - TP Thanh Hoá
            </p>
            <p className="text-white-50 small mb-2">
              <i className="bi bi-telephone-fill"></i>
              Hotline: 0945868886
            </p>
          </div>

          {/* Cột 3: Thông tin liên hệ + Bản đồ */}
          <div className="col-lg-4">
            {/* Bản đồ Google nhúng */}
            <div className="ratio ratio-16x9 rounded overflow-hidden shadow">
              <iframe
                title="Bản đồ Nem Thanh"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.523!2d105.678!3d19.912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31349a1e7f17b7f7%3A0x8f7d8e9f0a1b2c3d!2sNem%20Thanh!5e0!3m2!1svi!2s!4v1700000000000"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
