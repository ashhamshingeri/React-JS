import ProductCard from "./ProductCard";

function ProductCatalogue() {
  const products = [
    {
      name: "Wireless Headphones",
      price: 2499,
      description: "High quality wireless sound experience.",
      image:
        "https://i.pinimg.com/736x/fc/ad/23/fcad2327daa639e8892ee64bf8ce0311.jpg",
    },

    {
      name: "Smart Watch",
      price: 3999,
      description: "Track fitness and notifications easily.",
      image:
        "https://i.pinimg.com/736x/65/10/c1/6510c14c4c6116d0905dd602c6c1f335.jpg",
    },

    {
      name: "Gaming Mouse",
      price: 1499,
      description: "RGB gaming mouse with fast response.",
      image:
        "https://i.pinimg.com/1200x/d5/fa/89/d5fa89cd09b671f6ec5430cf41cd3f39.jpg",
    },

    {
      name: "Bluetooth Speaker",
      price: 1999,
      description: "Portable speaker with deep bass.",
      image:
        "https://i.pinimg.com/736x/ec/ba/67/ecba6716c30ffdec19315d908b80f5b6.jpg",
    },

    {
      name: "Laptop Bag",
      price: 999,
      description: "Stylish and water-resistant laptop bag.",
      image:
        "https://i.pinimg.com/736x/ea/05/3b/ea053b6f27436f2d59934850da705875.jpg",
    },

    {
      name: "Mechanical Keyboard",
      price: 2999,
      description: "Smooth typing experience for professionals.",
      image:
        "https://i.pinimg.com/1200x/2f/78/d7/2f78d7a824a9655ebce293393de0cc34.jpg",
    },
  ];

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4 font fw-bold">Product Catalogue</h1>

      <div className="row">
        {products.map((product, index) => (
          <div className="col-lg-4 col-md-6 mb-4" key={index}>
            <ProductCard
              name={product.name}
              price={product.price}
              description={product.description}
              image={product.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCatalogue;
