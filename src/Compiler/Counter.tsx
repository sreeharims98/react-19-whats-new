import { useState } from "react";

export const Counters = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <h2>Counter Example</h2>
      <Counter count={count1} setCount={setCount1} />
      <Counter count={count2} setCount={setCount2} />
    </div>
  );
};

const Counter = ({
  count,
  setCount,
}: {
  count: number;
  setCount: (count: number) => void;
}) => {
  return (
    <button style={{ width: 150 }} onClick={() => setCount(count + 1)}>
      Increment - {count}
    </button>
  );
};
