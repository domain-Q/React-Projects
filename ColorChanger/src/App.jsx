import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-200 rounded-full"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 overflow-hidden">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-2xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            red
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            blue
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            green
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "pink" }}
          >
            pink
          </button>
          <button
            onClick={() => setColor("olive")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "olive" }}
          >
            olive
          </button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "purple" }}
          >
            purple
          </button>
          <button
            onClick={() => setColor("lavender")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "lavender" }}
          >
            lavender
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            yellow
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
          >
            black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
