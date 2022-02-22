import { useState } from "react";

export function AddColor() {
  const [color, setColor] = useState("white");
  const styles = {
    fontSize: "24px",
    background: color,
  };
  return (
    <div>
      <input
        style={styles}
        placeholder="Enter Color"
        onChange={(event) => {
          setColor(event.target.value);
        }}
      />
      <button>Add color</button>
      <ColorBox color={color} />
    </div>
  );
}

function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "35px",
    width: "250px",
    marginTop: "10px",
  };
  return <div style={styles}></div>;
}
