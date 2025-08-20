import React, { useState } from "react";

function App() {
  const [active, setActive] = useState(true);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>YouTube Shorts Blocker</h1>
      <p>Status: {active ? "Blocking Shorts 🚫" : "Disabled ✅"}</p>
      <button onClick={() => setActive(!active)}>
        {active ? "Pause Blocking" : "Resume Blocking"}
      </button>
    </div>
  );
}

export default App;
