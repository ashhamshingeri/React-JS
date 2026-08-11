import { useState } from "react";

type Post = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
};

function PostsList() {
  const [posts, setPosts] = useState<Post[]>([]);

  let fetchPosts = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let postsData = await response.json();
    setPosts(postsData);
  };

  return (
    <div className="p-3">
      <h2 className="fw-bold">List of Posts:</h2>
      <button
        className="btn border-2 border-danger fw-bold my-3"
        onClick={fetchPosts}
      >
        Fetch Posts
      </button>
      <table className="table table-bordered table-striped table-hover">
        <thead className="table-danger">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td className="fw-bold">{post.id}</td>
              <td className="text-danger">{post.name}</td>
              <td className="text-danger">{post.email}</td>
              <td className="text-danger">{post.phone}</td>
              <td className="text-danger">{post.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PostsList;
