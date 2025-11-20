import "bootstrap/dist/css/bootstrap.min.css";
import MainBanner from "../components/MainBanner";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <MainBanner mainTitle="Liên Hệ" subTitle="Contact" />

      {/* Phần thông tin liên hệ */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-5 justify-content-center">
            {/* Cơ sở */}
            <div className="col-lg-4 text-center text-lg-start">
              <div className="d-flex flex-column flex-lg-row align-items-center align-items-lg-start gap-3">
                <div
                  className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{ width: "80px", height: "80px" }}
                >
                  <FaMapMarkerAlt style={{ fontSize: "36px" }} />
                </div>
                <div>
                  <h5 className="text-success mb-2 fw-bold">Cơ sở:</h5>
                  <p className="mb-0 text-dark">
                    Quan Sơn - Phường An Hưng - TP Thanh Hoá
                  </p>
                </div>
              </div>
            </div>

            {/* Hotline */}
            <div className="col-lg-4 text-center text-lg-start">
              <div className="d-flex flex-column flex-lg-row align-items-center align-items-lg-start gap-3">
                <div
                  className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{ width: "80px", height: "80px" }}
                >
                  <FaPhone style={{ fontSize: "36px" }} />
                </div>
                <div>
                  <h5 className="text-success mb-2 fw-bold">Hotline:</h5>
                  <p className="mb-0">
                    <span className="text-success text-decoration-none fw-bold d-block">
                      0945.868.886
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="col-lg-4 text-center text-lg-start">
              <div className="d-flex flex-column flex-lg-row align-items-center align-items-lg-start gap-3">
                <div
                  className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{ width: "80px", height: "80px" }}
                >
                  <FaEnvelope style={{ fontSize: "36px" }} />
                </div>
                <div>
                  <h5 className="text-success mb-2 fw-bold">Mail liên hệ:</h5>
                  <p className="mb-0">
                    <span className="text-success text-decoration-none">
                      Brand@gmail.com
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phần ảnh + form  */}
      <section className="py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            {/* Ảnh */}
            <div className="col-lg-6">
              <img
                src="/images/brand.jpg"
                alt="Nem chua Thanh Hóa"
                className="img-fluid rounded-4 shadow-lg w-100"
                style={{
                  objectFit: "cover",
                  height: "100%",
                  minHeight: "500px",
                }}
              />
            </div>
            {/* Form */}
            <div className="col-lg-6">
              <div
                className="bg-white p-5 rounded-4 shadow-lg h-100"
                style={{ border: "1px solid #e0e0e0" }}
              >
                <h3 className="text-success fw-bold text-center mb-4">
                  Liên hệ với chúng tôi
                </h3>
                <p className="text-muted text-center mb-4">
                  Kính mong quý khách hàng và đối tác chia sẻ góp ý hoặc liên hệ
                  hợp tác
                </p>

                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control form-control-lg rounded-pill shadow-sm"
                      placeholder="Họ và tên *"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control form-control-lg rounded-pill shadow-sm"
                      placeholder="Email *"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="tel"
                      className="form-control form-control-lg rounded-pill shadow-sm"
                      placeholder="Số điện thoại *"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      className="form-control rounded-3 shadow-sm"
                      rows={5}
                      placeholder="Nội dung liên hệ..."
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-success btn-lg px-5 py-3 rounded-pill shadow hover-lift"
                      style={{ minWidth: "200px" }}
                    >
                      Gửi liên hệ
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
