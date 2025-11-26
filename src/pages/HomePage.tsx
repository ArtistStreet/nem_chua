// src/pages/Home/HomePage.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSlider from "../components/Slider";
import { Helmet } from "react-helmet-async";
import { FaStar } from "react-icons/fa";

export default function HomePage() {
  const reviews = [
    {
      name: "Mrs. Thúy",
      role: "Nghệ Sĩ",
      content:
        "Thực sự thích hương vị Nem chua ở đây, với người yêu ẩm thực xứ Thanh thì ai cũng sẽ thích hương vị Nem chua đặc biệt này.",
      avatar: "/images/person1.jpeg",
      stars: 5,
    },
    {
      name: "Ngọc Anh VTC",
      role: "Phóng viên VTC",
      content:
        "Được chứng kiến quy trình của Nem thanh, mình rất tin tưởng an toàn vệ sinh ẩm thực của Nem Thanh. Mình rất thích hương vị nem ở đây",
      avatar: "/images/person2.jpeg",
      stars: 5,
    },
    {
      name: "Anh Toàn",
      role: "Giáo viên Tiếng Anh",
      content:
        "Tôi ăn nhiều vị nem khác nhau thì tôi thấy vị nem chua của Nem Thanh là ngon nhất",
      avatar: "/images/person3.webp",
      stars: 5,
    },
  ];

  const renderStars = (count: number) => {
    return [...Array(count)].map((_, i) => (
      <span key={i} className="px-1 text-warning">
        <FaStar />
      </span>
    ));
  };

  return (
    <>
      <Helmet>
        <title>Nem Chua Phương Chi Lê</title>
      </Helmet>
      <HeroSlider />
      <section className="py-8 bg-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h2 className="display-5 fw-normal text-success mb-4">
                Nem Chua xứ Thanh
              </h2>

              <p className="fw-light mb-4 title-main">
                Nem chua Thanh Hóa là món ăn truyền thống đặc sản của Thanh Hóa,
                được làm từ thịt lợn tươi, tỉ mỉ ướp gia vị và phơi khô. Nem
                chua Thanh Hóa có vị chua ngọt, thơm ngon, khi ăn kèm với rau
                sống, ớt, chanh, tỏi sẽ tạo nên hương vị tuyệt vời. Món ăn này
                được ưa chuộng và phổ biến ở khắp các tỉnh miền Trung và Bắc
                Trung Bộ của Việt Nam.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src="/images/01.png"
                alt="Nem chua Thanh Hóa"
                className="img-fluid rounded-4 shadow-lg"
                style={{ height: "30rem", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className="py-5"
        style={{ backgroundImage: "url('/images/background.jpg')" }}
      >
        <div className="container py-lg-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-white">
              Sản phẩm nổi bật của Phương Chi Lê
            </h2>
            <div
              className="mx-auto mt-3"
              style={{
                width: "80px",
                height: "4px",
                backgroundColor: "#05c10c",
              }}
            ></div>
          </div>

          <div className="row g-4 g-xl-5 justify-content-center">
            <div className="col-12 col-md-4 col-lg-3 text-center">
              <div className="product-item">
                <img
                  src="/images/nem-chua.jpg.webp"
                  alt="Nem Chua Nhỏ"
                  className="img-fluid rounded-4 shadow-lg mb-3 hover-scale"
                />
                <p className="text-white fw-medium fs-5">Nem Chua Nhỏ</p>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-3 text-center">
              <div className="product-item">
                <img
                  src="/images/nem-thinh.jpg.webp"
                  alt="Nem Thịnh"
                  className="img-fluid rounded-4 shadow-lg mb-3 hover-scale"
                />
                <p className="text-white fw-medium fs-5">Nem Thính</p>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-3 text-center">
              <div className="product-item">
                <img
                  src="/images/nem-nuong.jpg.webp"
                  alt="Nem Nướng"
                  className="img-fluid rounded-4 shadow-lg mb-3 hover-scale"
                />
                <p className="text-white fw-medium fs-5">Nem Nướng</p>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-3 text-center">
              <div className="product-item">
                <img
                  src="/images/nem-coi.jpg"
                  alt="Nem Cói"
                  className="img-fluid rounded-4 shadow-lg mb-3 hover-scale"
                />
                <p className="text-white fw-medium fs-5">Nem Cối</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container py-lg-5">
          <h2 className="text-center text-success display-5 fw-bold mb-5">
            Xưởng sản xuất
          </h2>

          <div className="row g-4 g-xl-5 justify-content-center">
            <div className="col-12 order-1 order-md-2">
              <div className="row g-3 g-xl-4">
                <div className="col-12 col-sm-6 col-md-3">
                  <div className="overflow-hidden rounded-4 shadow hover-shadow">
                    <img
                      src="/images/07.jpg"
                      alt="Chế biến nem"
                      className="img-fluid w-100 h-100 object-cover transition"
                    />
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-md-3">
                  <div className="overflow-hidden rounded-4 shadow hover-shadow">
                    <img
                      src="/images/05.jpg"
                      alt="Nguyên liệu sạch"
                      className="img-fluid w-100 h-100 object-cover transition"
                    />
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-md-3">
                  <div className="overflow-hidden rounded-4 shadow hover-shadow">
                    <img
                      src="/images/04.jpg"
                      alt="Đóng gói"
                      className="img-fluid w-100 h-100 object-cover transition"
                    />
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-md-3">
                  <div className="overflow-hidden rounded-4 shadow hover-shadow">
                    <img
                      src="/images/06.jpg"
                      alt="Nhân viên"
                      className="img-fluid w-100 h-100 object-cover transition"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10" style={{ backgroundColor: "#f5f7f5" }}>
        <div className="container">
          <div className="text-start mb-5">
            <h2 className="display-6 fw-bold text-success lh-base">
              Khách hàng nói gì về
              <br />
              <span className="text-success">chúng tôi, những</span>
              <br />
              <span className="text-success">feedback chân thật nhất</span>
              <br />
              về Nem Phương Chi Lê
            </h2>
          </div>

          <div className="row g-4 justify-content-center">
            {reviews.map((review, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="bg-white rounded-4 shadow-sm p-4 h-100 position-relative overflow-hidden">
                  <div className="mb-4">
                    <p className="text-muted fst-italic">"{review.content}"</p>
                  </div>

                  {/* Ngôi sao */}
                  <div className="mb-4">{renderStars(review.stars)}</div>

                  {/* Avatar + tên */}
                  <div className="d-flex align-items-center">
                    <img
                      src={review.avatar || "https://via.placeholder.com/60"}
                      alt={review.name}
                      className="rounded-circle me-3"
                      width="60"
                      height="60"
                      style={{ objectFit: "cover" }}
                    />
                    <div>
                      <h6 className="mb-0 fw-bold text-success">
                        {review.name}
                      </h6>
                      <small className="text-muted">{review.role}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
