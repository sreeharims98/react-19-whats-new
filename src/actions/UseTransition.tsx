import { useState, useTransition } from "react";
import { postData } from "../api/postData";

export function UseTransition() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async () => {
    setError("");
    startTransition(async () => {
      try {
        await postData(name);
      } catch (err) {
        const error = err as Error;
        setError(error.message);
      }
    });
  };

  return (
    <div>
      <h3>UseTransition</h3>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={handleSubmit} disabled={isPending}>
        Update
      </button>
      {error && <p>{error}</p>}
    </div>
  );
}
