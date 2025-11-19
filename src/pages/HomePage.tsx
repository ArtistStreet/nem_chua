// src/pages/Home/HomePage.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSlider from "../components/Slider";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <section className="py-5 bg-white">
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
    </>
  );
}
