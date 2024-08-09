export default function Home() {
  return (
    <div>
      <details>
        <summary>Click to see more details</summary>
        <p>Here are the details...</p>
      </details>
      <div className="font-rubik">
        <h1>This is a heading with the Rubik font</h1>
        <p>This is a paragraph with the Rubik font.</p>
      </div>

      <button class="focus:outline-none focus-visible:ring ...">Submit</button>
    </div>
  );
}
