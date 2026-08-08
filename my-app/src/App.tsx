import PostsList from "./Post";

function App() {
  return (
    <div className="container">
      <h1 className="text-danger text-center my-4 fw-bold">
        Fetch Posts from JSONPlaceholder API
      </h1>
      <PostsList></PostsList>
    </div>
  );
}

export default App;
