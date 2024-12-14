import { use } from "react";
import { getData } from "../api/getData";

export function Use() {
  const posts = use(getData);

  return (
    <div>
      <h3>Use</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
