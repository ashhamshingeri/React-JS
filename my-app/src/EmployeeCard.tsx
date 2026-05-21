import "./EmployeeCard.css";

type EmployeeProps = {
  name: string;
  position: string;
  department: string;
  salary: number;
};

function EmployeeCard({ name, position, department, salary }: EmployeeProps) {
  return (
    <div className="card border-primary mb-3 bg-dark-subtle">
      <div className="card-body shadow">
        <h3 className="card-title text-primary-emphasis fw-bold">{name}</h3>
        <hr />
        <h4 className="card-subtitle text-muted">{position}</h4>
        <p className="card-text text-danger">Department: {department}</p>
        <p className="card-text">Salary: ${salary}</p>
      </div>
    </div>
  );
}
export default EmployeeCard;