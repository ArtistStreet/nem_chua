// src/pages/Products/ProductsPage.tsx
import { Link } from "react-router-dom";
import MainBanner from "../components/MainBanner";

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
      <MainBanner mainTitle="Sản Phẩm" subTitle="Products" />

      <section className="py-5 bg-light">
        <div className="container">
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
