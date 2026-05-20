type studentProp = {
  name: string;
  age: number;
  email: string;
  phone: number;
};
function Props(prop: studentProp) {
  return (
    <div className="d-flex justify-content-center mt-5 mx-3 gap-5">
      <div className="container border border-primary text-primary-emphasis w-50 p-3 bg-light rounded shadow">
        <h3 className="text-center fw-bold">{prop.name}</h3>
        <hr />
        <h3>Age: {prop.age}</h3>
        <h3>Email: {prop.email}</h3>
        <h3>Phone: {prop.phone}</h3>
      </div>
    </div>
  );
}

export default Props;
