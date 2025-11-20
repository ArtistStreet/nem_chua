import { Link } from "react-router-dom";
import MainBanner from "../components/MainBanner";
import { products } from "../data/products";
import { Helmet } from "react-helmet-async";

export default function Products() {
  return (
    <>
      <Helmet>
        <title>Sản phẩm – Nem Chua Phương Chi Lê</title>
      </Helmet>
      <MainBanner mainTitle="Sản Phẩm" subTitle="Sản Phẩm" />

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {products.map((product, index) => (
              <div className="col" key={index}>
                <Link
                  to={`/san-pham/${product.slug
                    .toLowerCase()
                    .replace(/ /g, "-")}`}
                  className="text-decoration-none"
                >
                  <div className="card h-100 border-0 shadow-sm hover-shadow transition">
                    <div className="ratio ratio-1x1">
                      <img
                        src={product.image}
                        className="card-img-top rounded-top"
                        alt={product.name}
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="card-body text-center py-4">
                      <h5 className="card-title text-success mb-0 fw-bold">
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
