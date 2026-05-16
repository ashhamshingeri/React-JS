function FruitsCards() {
  let fruits = [
    {
      title: "Strawberry",
      offer: 20,
      image:
        "https://images.pexels.com/photos/28865343/pexels-photo-28865343.jpeg",
      price: 250,
    },
    {
      title: "Jack Fruit",
      offer: 10,
      image:
        "https://images.pexels.com/photos/11669555/pexels-photo-11669555.jpeg",
      price: 120,
    },
    {
      title: "Mango",
      offer: 15,
      image:
        "https://images.pexels.com/photos/8571276/pexels-photo-8571276.jpeg",
      price: 200,
    },
    {
      title: "Banana",
      offer: 5,
      image:
        "https://images.pexels.com/photos/33203199/pexels-photo-33203199.jpeg",
      price: 80,
    },
  ];

  return (
    <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4 my-2 mx-5">
      {fruits.map((fruit) => {
        const offerPrice = fruit.price - (fruit.price * fruit.offer) / 100;

        return (
          <div className="col">
            <div className="card h-100 shadow rounded-4 overflow-hidden border border-danger">
              <img
                className="card-img-top"
                style={{ minHeight: "220px" }}
                src={fruit.image}
                alt={fruit.title}
              />

              <div className="card-body bg-dark text-white">
                <h4 className="card-title fw-bold text-center">
                  {fruit.title}
                </h4>
                <p className="text-warning fw-semibold">{fruit.offer}% OFF</p>

                <hr />

                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="text-decoration-line-through text-secondary">
                      ₹{fruit.price}
                    </h5>

                    <h4 className="text-success">₹{offerPrice}/kg</h4>
                  </div>

                  <button className="btn btn-outline-danger fw-semibold">
                    + Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FruitsCards;
