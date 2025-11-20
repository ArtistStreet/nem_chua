import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Trang không tồn tại</title>
      </Helmet>
      <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
        <div className="text-center">
          <h1 className="display-1 fw-bold text-success">404</h1>
          <h2 className="display-5 mb-4">Oops! Trang không tồn tại</h2>

          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Link
              to="/"
              className="btn btn-outline-success btn-lg px-5 btn-outline-success-hover-white"
            >
              Về trang chủ
            </Link>
            <Link
              to="/san-pham"
              className="btn btn-outline-success btn-lg px-5 btn-outline-success-hover-white"
            >
              Xem sản phẩm
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
