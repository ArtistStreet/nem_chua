// src/pages/NewsPage.tsx
import { Helmet } from "react-helmet-async";

export default function NewsPage() {
  return (
    <>
      <Helmet>
        <title>Tin tức & Kinh nghiệm – Nem Chua Phương Chi Lê</title>
      </Helmet>

      <section className="py-5 bg-light">
        <div className="container">
          <h1 className="text-center text-success display-5 fw-bold mb-5">
            Tin tức & Kinh nghiệm hay
          </h1>

          <div className="row g-5 mb-5 align-items-center">
            <div className="col-lg-6">
              <img
                src="/images/Nem sau cat.jpg"
                alt="Cách làm nem chua Thanh Hóa"
                className="img-fluid rounded-4 shadow-lg w-100"
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
            <div className="col-lg-6">
              <span className="badge bg-success text-white mb-3">
                Kinh nghiệm hay
              </span>
              <h2 className="fw-bold text-success">
                Cách làm nem chua Thanh Hóa ngon chuẩn vị, ăn là ghiền
              </h2>
              <p className="text-muted">
                Công thức làm nem chua Thanh Hóa truyền thống, lên men tự nhiên,
                không chất bảo quản, giữ trọn hương vị đặc trưng xứ Thanh.
              </p>
              <a
                href="https://www.bachhoaxanh.com/kinh-nghiem-hay/cach-lam-nem-chua-thanh-hoa-ngon-chuan-vi-an-la-ghien-1420695"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success btn-lg rounded-pill px-4 shadow text-white"
              >
                Xem chi tiết →
              </a>
            </div>
          </div>

          <div className="row g-4">
            {[
              {
                title: "Cách bảo quản nem chua để được lâu mà vẫn ngon",
                desc: "Mẹo giữ nem chua tươi 7–10 ngày, không bị chua quá hay hỏng",
                img: "/images/nem sau goi bong.jpg",
                href: "https://www.dienmayxanh.com/vao-bep/mach-ban-cach-bao-quan-nem-nem-chua-nem-chua-ran-don-gian-de-13877?srsltid=AfmBOop06dDjGhFL08Ke6vXfpbTjJMiLPrR6ouZcNZdQciY0qJB0whsK",
              },
              {
                title: "Nem chua bao nhiêu calo? Ăn có mập không?",
                desc: "Giải đáp chi tiết + cách ăn nem chua rán mà không lo tăng cân",
                img: "/images/nem-thinh.jpg",
                href: "https://nhathuoclongchau.com.vn/bai-viet/nem-chua-ran-bao-nhieu-calo-an-co-beo-khong-66701.html",
              },
              {
                title: "Top 5 món ăn kèm nem chua ngon nhất định phải thử",
                desc: "Tỏi, ớt, lá đinh lăng, bia lạnh… kết hợp thế nào cho chuẩn vị?",
                img: "/images/nem-coi.jpg",
                href: "https://cotienfoods.vn/blogs/an-ngon/mon-ngon-tu-nem-chua?srsltid=AfmBOorWYzcaJ1LBaUVO7syxkl0tJh0ltQcxsXmPzvGEKMNWcloVv92n",
              },
            ].map((item, i) => (
              <div key={i} className="col-md-4">
                <div className="card border-0 shadow h-100">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="card-img-top rounded-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-success fw-bold">
                      {item.title}
                    </h5>
                    <p className="card-text text-muted small flex-grow-1">
                      {item.desc}
                    </p>
                    <a
                      href={`${item.href}`}
                      className="btn-outline-success mt-3 rounded-pill"
                    >
                      Đọc thêm →
                    </a>
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
