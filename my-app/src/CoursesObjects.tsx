function Courseslist() {
  let courses = [
    {
      title: "Full Stack - MERN",
      description: "Learn the MERN stack to become a full-stack developer.",
      image:
        "https://i.pinimg.com/736x/6d/09/8d/6d098d8faec41c4c7d2bc6c4734ec7f9.jpg",
      price: "$199",
    },
    {
      title: "My SQL",
      description: "Learn My SQL database management system.",
      image:
        "https://i.pinimg.com/736x/b5/eb/05/b5eb054cce291859674317980069c0a0.jpg",
      price: "$149",
    },
    {
      title: "JAVA",
      description: "Learn Java programming from basics to advanced.",
      image:
        "https://i.pinimg.com/736x/04/fa/d7/04fad746503aef15aa3b136399842f52.jpg",
      price: "$179",
    },
    {
      title: "Python",
      description: "Learn Python programming from basics to advanced.",
      image:
        "https://i.pinimg.com/736x/0f/bc/7c/0fbc7c345732e1f9141e530721cdfb50.jpg",
      price: "$159",
    },
  ];
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4 my-2 mx-5">
      {courses.map((course) => (
        <div>
          <div className="col">
            <div className="card h-100 shadow rounded-4 overflow-hidden">
              {
                <img
                  className="card-img-top"
                  style={{ minHeight: "220px" }}
                  src={course.image}
                ></img>
              }

              <div className="card-body">
                <h4 className="card-title fw-bold text-center">
                  {course.title}
                </h4>
                <hr />
                <h5 className="text-success">{course.price}</h5>
                <p className="card-text text-muted">{course.description}</p>
                <button className="btn btn-outline-danger me-0 fw-semibold w-100">
                  Begin
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Courseslist;
