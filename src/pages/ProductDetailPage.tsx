import { useParams } from "react-router-dom";
import { products } from "../data/products";
import MainBanner from "../components/MainBanner";
import { Helmet } from "react-helmet-async";

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  if (!product)
    return <div className="text-center py-5">Không tìm thấy sản phẩm</div>;

  return (
    <>
      <Helmet>
        <title>{product.name} – Nem Chua Phương Chi Lê</title>
        <meta
          name="description"
          content={`Xem chi tiết sản phẩm ${product.name} của Phương Chi Lê.`}
        />
      </Helmet>
      <MainBanner mainTitle={product.name} subTitle="Sản Phẩm" />
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Ảnh trái */}
            <div className="col-lg-4">
              <img
                src={product.image}
                alt={product.name}
                className="img-fluid rounded-4 shadow-lg"
                style={{ maxHeight: "500px", objectFit: "cover" }}
              />
            </div>

            {/* Thông tin phải */}
            <div className="col-lg-8">
              <h2 className="display-5 fw-bold text-success mb-3">
                {product.name}
              </h2>

              <p className="lead text-muted">{product.desc}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
