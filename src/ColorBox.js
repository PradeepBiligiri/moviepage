import { useState } from "react";

export function AddColor() {
  const [color, setColor] = useState("white");
  const styles = {
    fontSize: "24px",
    height: "35px",
    width: "300px",
    background: color,
  };
  const [colorList, setColorList] = useState(["orange", "red", "blue"]);
  return (
    <div>
      <div className="add-color">
        <input
          style={styles}
          placeholder="Enter Color"
          onChange={(event) => {
            setColor(event.target.value);
          }}
        />
        <button
          className="btn-bg"
          /*Copy color list and add new color through button */
          onClick={() => setColorList([...colorList, color])}
        >
          Add color
        </button>
      </div>
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}
      {/* <ColorBox color={color} /> */}
    </div>
  );
}

function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "35px",
    width: "300px",
    marginTop: "10px",
  };
  return <div style={styles}></div>;
}
