import { useOptimistic, useState } from "react";
import { postData } from "../api/postData";

export function UseOptimistic() {
  const [currentName, setCurrentName] = useState("John Doe");
  const [optimisticName, setOptimisticName] = useOptimistic(currentName);

  const submitAction = async (formData: FormData) => {
    try {
      const name = formData.get("name") as string;
      setOptimisticName(name);
      const res = await postData(name);
      if (res) {
        setCurrentName(res.name);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h3>UseOptimistic</h3>
      <form action={submitAction}>
        <p>optimisticName: {optimisticName}</p>
        <label>currentName:</label>
        <input type="text" name="name" />
        <button type="submit" disabled={currentName !== optimisticName}>
          Update
        </button>
      </form>
    </div>
  );
}
