import { Link } from "react-router-dom";

type MainBannerProps = {
  mainTitle: string;
  subTitle: string;
};

const MainBanner: React.FC<MainBannerProps> = ({ mainTitle, subTitle }) => {
  return (
    <>
      <section
        className="py-5 text-center position-relative overflow-hidden"
        style={{
          background:
            "linear-gradient(rgba(0,100,0,0.7), rgba(0,100,0,0.8)), url('/images/nem-chua.jpg.webp') center/cover no-repeat",
          minHeight: "400px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container position-relative z-1">
          <h1 className="display-5 fw-bold text-white mb-3">{mainTitle}</h1>
          <p className="text-white-50 fs-5">
            <Link to="/" className="text-white-50 text-decoration-none">
              Trang chủ
            </Link>
            <i className="bi bi-chevron-right mx-2"></i>
            <Link to="/san-pham" className="text-white-50 text-decoration-none">
              {subTitle}
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default MainBanner;
