import "bootstrap/dist/css/bootstrap.min.css";
import MainBanner from "../components/MainBanner";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Liên hệ – Nem Chua Phương Chi Lê</title>
      </Helmet>
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
                  <p className="mb-0 text-success text-decoration-none">
                    0945.868.886
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
                  <p className="mb-0 text-success text-decoration-none">
                    nemphuongchile@gmail.com
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
                src="/images/Nem ong hop.jpg"
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

                <form
                  action="https://formsubmit.co/nemphuongchile@gmail.com"
                  method="POST"
                  className="bg-white p-4 p-md-5 rounded-4 shadow-lg"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="_next"
                    value="nemchuaphuongchile.com/cam-on"
                  />
                  <input
                    type="hidden"
                    name="_subject"
                    value="Khách liên hệ từ website Nem Phương Chi Lê"
                  />

                  <div className="mb-3">
                    <input
                      type="text"
                      name="name"
                      className="form-control form-control-lg rounded-pill"
                      placeholder="Họ và tên *"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      name="email"
                      className="form-control form-control-lg rounded-pill"
                      placeholder="Email *"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="tel"
                      name="phone"
                      className="form-control form-control-lg rounded-pill"
                      placeholder="Số điện thoại *"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      name="message"
                      rows={5}
                      className="form-control rounded-3"
                      placeholder="Nội dung liên hệ..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-success btn-lg px-5 rounded-pill w-100 shadow"
                  >
                    Gửi liên hệ
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
