import { version } from "react";
import { BeforeActions } from "./actions/BeforeActions";
import { UseTransition } from "./actions/UseTransition";
import { UseActionState } from "./actions/UseActionState";
import { UseFormStatus } from "./actions/UseFormStatus";
import { UseOptimistic } from "./actions/UseOptimistic";
import { Use } from "./actions/Use";
import { Refs } from "./refs/Refs";

function App() {
  return (
    <div>
      <center>
        <h1>What’s new in React v{version}</h1>
      </center>
      <h1>Actions</h1>
      {/* Before Actions */}
      <BeforeActions />
      {/* UseTransition */}
      <UseTransition />
      {/* UseActionState */}
      <UseActionState />
      {/* UseFormStatus */}
      <UseFormStatus />
      {/* UseOptimistic */}
      <UseOptimistic />
      {/* Use */}
      <Use />

      <h1>Refs</h1>
      {/* Refs */}
      <Refs />
    </div>
  );
}

export default App;
