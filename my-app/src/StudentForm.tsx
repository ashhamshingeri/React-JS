import { useState } from "react";

function StudentForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  return (
    <div className="container mt-5 w-50 border rounded shadow p-4">
      <h1 className="text-center mb-5">Students Form</h1>
      <label htmlFor="StudentName" className="form-label fw-bold">
        Full Name:
      </label>
      <input
        type="text"
        name="StudentName"
        id="StudentName"
        onChange={(n) => setName(n.target.value)}
        className="form-control mb-3"
        placeholder="Enter your full name"
      />

      <label htmlFor="StudentEmail" className="form-label fw-bold">
        Email Address:
      </label>
      <input
        type="email"
        name="StudentEmail"
        id="StudentEmail"
        onChange={(e) => setEmail(e.target.value)}
        className="form-control mb-3"
        placeholder="example@gmail.com"
      />

      {/* <label htmlFor="StudentPassword" className="form-label fw-bold">
        Password:
      </label>
      <input
        type="password"
        name="StudentPassword"
        id="StudentPassword"
        onChange={(p) => setPassword(p.target.value)}
        className="form-control mb-3"
        placeholder="Example@123"
      /> */}

      <div>
        <label htmlFor="AIML" className="form-label d-block me-3 fw-bold">
          Branch:
        </label>
        <input
          type="radio"
          name="StudentBranch"
          id="AIML"
          className="form-check-input me-2"
        />
        <label htmlFor="DS">AIML</label>
        <input
          type="radio"
          name="StudentBranch"
          id="DS"
          className="form-check-input me-2 ms-3 mb-3"
        />
        <label htmlFor="AIML">DS</label>
      </div>
      <div>
        <h3>
          Hello! <span  className="text-muted">{name}</span> 👋
        </h3>
        <h3>
          Your Email: <span  className="text-muted">{email}</span>
        </h3>
        {/* <h3>-{password}</h3> */}
      </div>
    </div>
  );
}

export default StudentForm;
