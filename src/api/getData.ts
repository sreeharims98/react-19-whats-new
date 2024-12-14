interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const getData: Promise<Post[]> = fetch(
  "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5"
).then((response) => response.json());
