function Courseslist() {
  let courses = [
    "Full Stack - MERN",
    "Advance Web Designing",
    "Python",
    "Artificial Intelligence",
  ];
  return (
    <div>
      <ul className="list-group mx-auto w-50 mt-3 shadow">
        <li className="list-group-item fw-bold text-white bg-primary text">Course List</li>
        {courses.map((course) => (
          <li className="list-group-item d-flex justify-content-between align-items-center fw-semibold">{course} <button className="btn btn-outline-primary me-0 fw-semibold">Begin</button></li>
        ))}
      </ul>
      <p className="mt-3 text-center text-secondary">Please select a course to start your learning journey.</p>
    </div>
   
  );
}

export default Courseslist;
