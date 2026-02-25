"use client";

import * as Graft from "@graft/npm-backend";

export default function Home() {
  const handleClick = async () => {
    try {
      Graft.GraftConfig.host = "ws://localhost:8080/ws";

      const backend = new Graft.Backend();
      const result = await backend.sayHello();
      alert(result);
    } catch (error) {
      console.error("ERROR:", error);
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Graftcode Gateway</h1>
      <button style={{ marginTop: 20 }} onClick={handleClick}>
        Cześć!
      </button>
    </div>
  );
}
