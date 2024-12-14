interface NameDataProps {
  id: number;
  name: string;
}

export const postData = async (data: string | null): Promise<NameDataProps> => {
  try {
    if (!data) {
      throw new Error("Data is required");
    }

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        name: data,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (!response.ok) {
      throw new Error("Error: Something went wrong!");
    }

    const jsonResponse: NameDataProps = await response.json();
    return jsonResponse; // Return the response as JSON
  } catch (err) {
    const error = err as Error;
    throw new Error(error.message);
  }
};
