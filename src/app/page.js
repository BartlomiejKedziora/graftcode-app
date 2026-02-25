"use client";

export default function Home() {
  const handleClick = async () => {
    const res = await fetch("/api/hello");
    const data = await res.json();
    console.log(data);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Graft Test</h1>
      <button onClick={handleClick}>Test backend</button>
    </div>
  );
}
