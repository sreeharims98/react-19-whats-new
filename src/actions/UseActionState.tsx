import { useActionState } from "react";
import { postData } from "../api/postData";

export function UseActionState() {
  const [error, submitAction, isPending] = useActionState(
    async (previousState: unknown, formData: FormData) => {
      try {
        const name = formData.get("name") as string;
        await postData(name);
        return null;
      } catch (err) {
        const error = err as Error;
        return error.message;
      }
    },
    null
  );

  return (
    <div>
      <h3>UseActionState</h3>
      <form action={submitAction}>
        <input type="text" name="name" />
        <button type="submit" disabled={isPending}>
          Update
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
