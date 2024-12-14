import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { postData } from "../api/postData";

export function UseFormStatus() {
  const [error, submitAction] = useActionState(
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
      <h3>UseFormStatus</h3>
      <form action={submitAction}>
        <input type="text" name="name" />
        <DesignButton />
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

function DesignButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      Update
    </button>
  );
}
