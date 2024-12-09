import React, { useEffect, useRef, useState } from "react";
import SceneOne from "./components/SceneOne";
import SceneTwo from "./components/SceneTwo";
import SceneThree from "./components/SceneThree";

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scenes, setScenes] = useState([
    <SceneThree key="0" />,
    <SceneOne key="1" />,
    <SceneTwo key="2" />,
    <SceneThree key="3" />,
    <SceneOne key="4" />,
  ]);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      if (!container) return;
      const scrollTop = container.scrollTop;
      const viewportHeight = window.innerHeight;

      // Loop scrolling logic
      if (scrollTop >= viewportHeight * (scenes.length - 1)) {
        container.scrollTop = viewportHeight;
      }
      if (scrollTop <= 0) {
        container.scrollTop = viewportHeight * (scenes.length - 2);
      }
    };

    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, [scenes]);

  return (
    <div
      ref={containerRef}
      style={{
        height: "100vh",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
        background: "#fff", // Set background to white
      }}
    >
      {scenes.map((Scene, index) => (
        <div key={index} style={{ height: "100vh", width: "100vw" }}>
          {Scene}
        </div>
      ))}
    </div>
  );
}
