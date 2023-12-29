import Circle from "./shapes/Circle";
import Rectangle from "./shapes/Rectangle";
import Triangle from "./shapes/Triangle";

function App() {
  return (
    <div style={{ background: "white", display: "flex", columnGap: "1rem" }}>
      <Rectangle width={200} height={100} />
      <Triangle sideLength={100} />
      <Circle radius={50} />
    </div>
  );
}

export default App;
