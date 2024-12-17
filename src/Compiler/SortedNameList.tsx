import { useState } from "react";

export const SortedNameList = () => {
  const [count, setCount] = useState(0);
  const [names] = useState(["John", "Doe", "Jane", "Alice", "Bob"]);

  const sortedNames = names.sort();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <h2>Sorted Name List Example</h2>
      <Counter count={count} setCount={setCount} />
      <SortedListNames sortedNames={sortedNames} />
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

const SortedListNames = ({ sortedNames }: { sortedNames: string[] }) => {
  return (
    <ul>
      {sortedNames.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
};
