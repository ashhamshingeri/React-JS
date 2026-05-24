import "./ProductCard.css";

type ProductProps = {
  name: string;
  price: number;
  description: string;
  image: string;
};

function ProductCard({ name, price, description, image }: ProductProps) {
  return (
    <div className="card h-100 shadow rounded-4 overflow-hidden">
      <img
        src={image}
        className="card-img-top"
        alt={name}
        height="250"
        style={{
          height: "250px",
          objectFit: "cover",
          width: "100%",
        }}
      />

      <div className="card-body p-4 card-body">
        <h5 className="card-title fw-bold fs-3 text-white">{name}</h5>

        <h6 className="text-primarys fw-bold">₹ {price}</h6>

        <p className="card-text text-secondary">{description}</p>

        <button className="fw-bold">🛒 Buy Now</button>
      </div>
    </div>
  );
}

export default ProductCard;
