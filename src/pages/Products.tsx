// src/pages/Products/ProductsPage.tsx
import { Link } from "react-router-dom";

export default function Products() {
  const products = [
    {
      name: "Nem Chua",
      img: "/images/nem-chua.jpg.webp",
    },
    {
      name: "Nem Cói",
      img: "/images/nem-coi.jpg",
    },
    {
      name: "Nem Nướng",
      img: "/images/nem-nuong.jpg.webp",
    },
    {
      name: "Nem Thính",
      img: "/images/nem-thinh.jpg.webp",
    },
  ];

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
          <h1 className="display-5 fw-bold text-white mb-3">Sản phẩm</h1>
          <p className="text-white-50 fs-10">
            Trang chủ <i className="bi bi-chevron-right mx-2"></i> Sản phẩm
          </p>
        </div>
      </section>

      {/* Danh sách sản phẩm */}
      <section className="py-5 bg-light">
        <div className="container">
          {/* Grid sản phẩm */}
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {products.map((product, index) => (
              <div className="col" key={index}>
                <Link
                  to={`/san-pham/${product.name
                    .toLowerCase()
                    .replace(/ /g, "-")}`}
                  className="text-decoration-none"
                >
                  <div className="card h-100 border-0 shadow-sm hover-shadow transition">
                    <div className="ratio ratio-1x1">
                      <img
                        src={product.img}
                        className="card-img-top rounded-top"
                        alt={product.name}
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="card-body text-center py-4">
                      <h5 className="card-title text-dark mb-0 fw-bold">
                        {product.name}
                      </h5>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
