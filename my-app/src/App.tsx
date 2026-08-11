import PostTable from "./PostTable";

function App() {
  return (
    <div className="container">
      <h1 className="text-danger text-center my-4 fw-bold">
        Fetch Posts from JSONPlaceholder API
      </h1>
      <PostTable></PostTable>
    </div>
  );
}

export default App;
