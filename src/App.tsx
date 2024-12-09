import React, { useEffect, useRef, useState } from "react";
import SceneOne from "./components/SceneOne";
import SceneTwo from "./components/SceneTwo";
import SceneThree from "./components/SceneThree";

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentScene, setCurrentScene] = useState(0); // Tracks the current scene
  const [inBetween, setInBetween] = useState(false); // Tracks if the user is in-between scenes
  const scenes = [
    <SceneOne key="1" />,
    <SceneTwo key="2" />,
    <SceneThree key="3" />,
  ];

  useEffect(() => {
    const container = containerRef.current;

    let scrollTimeout: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      if (!container) return;
      const scrollTop = container.scrollTop;
      const viewportHeight = window.innerHeight;

      // Infinite scroll logic
      if (scrollTop >= viewportHeight * scenes.length) {
        container.scrollTop = 0; // Loop back to the first scene
        return;
      }
      if (scrollTop < 0) {
        container.scrollTop = viewportHeight * (scenes.length - 1); // Loop to the last scene
        return;
      }

      // Detect in-between state
      const sceneIndex = Math.round(scrollTop / viewportHeight);
      const remainder = scrollTop % viewportHeight;

      setCurrentScene(sceneIndex % scenes.length);
      setInBetween(remainder !== 0);

      // Snap to the nearest scene when in-between
      if (inBetween) {
        if (scrollTimeout) clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          const nearestSceneTop = sceneIndex * viewportHeight;
          container.scrollTo({
            top: nearestSceneTop,
            behavior: "smooth",
          });
        }, 100); // Adjust for responsiveness
      }
    };

    container?.addEventListener("scroll", handleScroll);
    return () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      container?.removeEventListener("scroll", handleScroll);
    };
  }, [inBetween, currentScene, scenes.length]);

  return (
    <div
      ref={containerRef}
      style={{
        height: "100vh",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
        background: "#fff",
      }}
    >
      {[...scenes, ...scenes].map((Scene, index) => (
        <div
          key={index}
          className="scene"
          style={{ height: "100vh", width: "100vw" }}
        >
          {Scene}
        </div>
      ))}
    </div>
  );
}
