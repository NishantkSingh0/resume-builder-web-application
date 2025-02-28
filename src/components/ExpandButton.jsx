import { useState } from "react";

export default function HoverMessageButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img src="/resume-builder-web-application/BinaryBunch.jpeg" alt="Logo" className="w-7 h-7 ml-8 rounded-full" />
      </div>

      {hovered && (
        <div
        className="absolute left-16 top-1/2 -translate-y-1/2 bg-gray-600/95 text-white text-sm px-6 py-4 rounded-md w-80 text-left"
        onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Secured 3rd rank in university Hackathon (BinaryBunch) on <a href="https://github.com/NishantkSingh0/Proctoring-System" className="text-blue-400 underline ml-1 no-underline"><b>Proctoring System</b></a> project.
        </div>
      )}
    </div>
  );
}
