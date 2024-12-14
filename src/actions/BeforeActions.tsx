import { useState } from "react";
import { postData } from "../api/postData";

export function BeforeActions() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async () => {
    try {
      setIsPending(true);
      await postData(name);
    } catch (err) {
      const error = err as Error;
      setError(error.message);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div>
      <h3>Before Actions</h3>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={handleSubmit} disabled={isPending}>
        Update
      </button>
      {error && <p>{error}</p>}
    </div>
  );
}
