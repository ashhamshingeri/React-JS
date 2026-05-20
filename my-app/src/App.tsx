// import Courseslist from "./Courseslist";
// import CoursesObjects from "./CoursesObjects";
// import StudentForm from "./StudentForm";

import Props from "./Props";

function App() {
  return (
    <div>
      <h1 className="text-center my-3 fw-bold text-primary-emphasis">Student Details</h1>
      <Props name="Ashham Shingeri" age={21} email="mohammedashhamshingeri@gmail.com" phone={9741445509}></Props>
      <Props name="Shiham Shingeri" age={10} email="shihamshingeri@gmail.com" phone={1234567890}></Props>
    </div>
  );
}

export default App;
