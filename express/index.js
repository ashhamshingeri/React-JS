const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/", (request, response) => {
  response.send("Welcome to the Express JS Student API");
});

app.get("/about", (request, response) => {
  response.send("Express JS Student API");
});

const students = [
  {
    id: 1,
    name: "Ashham",
    course: "MERN Stack",
  },
  {
    id: 2,
    name: "Nehzan",
    course: "Python",
  },
  {
    id: 3,
    name: "Abdullah",
    course: "Java",
  },
];

app.get("/students/search", (request, response) => {
  const name = request.query.name.toLowerCase();

  const student = students.filter((student) =>
    student.name.toLowerCase().includes(name),
  );

  if (student.length === 0) {
    return response.status(404).json({
      message: "Student not found",
    });
  }

  response.json(student);
});

app.get("/students", (request, response) => {
  response.json(students);
});

app.get("/students/:id", (request, response) => {
  const id = Number(request.params.id);

  const student = students.find((student) => student.id === id);

  if (!student) {
    return response.status(404).json({
      message: "Student not found",
    });
  }

  return response.json(student);
});

app.post("/students", (request, response) => {
  const studentData = request.body;

  if (!studentData.name || !studentData.course) {
    return response.status(400).json({
      message: "Student Name and Course are required",
    });
  }

  const student = {
    id: students.length + 1,
    name: studentData.name,
    course: studentData.course,
  };

  students.push(student);

  return response.status(201).json({
    message: "Student record created successfully",
    newRecord: student,
  });
});

app.listen(PORT, () => {
  console.log("Backend API on - http://localhost:3000");
});
