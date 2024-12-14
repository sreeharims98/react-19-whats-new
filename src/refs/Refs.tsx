import { useRef } from "react";

export const Refs = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <h2>ref as a prop</h2>
      <MyInput placeholder="Type here..." ref={inputRef} />
    </div>
  );
};

type MyInputProps = {
  placeholder: string;
  ref: React.RefObject<HTMLInputElement | null>;
};

function MyInput({ placeholder, ref }: MyInputProps) {
  return <input placeholder={placeholder} ref={ref} />;
}
