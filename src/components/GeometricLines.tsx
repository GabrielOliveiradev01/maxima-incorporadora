const GeometricLines = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      {/* Top horizontal line */}
      <line
        x1="0"
        y1="15%"
        x2="100%"
        y2="15%"
        stroke="hsl(var(--gold))"
        strokeWidth="1.5"
        className="opacity-70 animate-float-line"
        style={{ animationDelay: "0s", animationDuration: "10s" }}
      />
      
      {/* Vertical line right */}
      <line
        x1="65%"
        y1="10%"
        x2="65%"
        y2="40%"
        stroke="hsl(var(--gold))"
        strokeWidth="1.5"
        className="opacity-70 animate-float-line"
        style={{ animationDelay: "1.2s", animationDuration: "12s" }}
      />

      {/* Rectangle top-right */}
      <rect
        x="70%"
        y="15%"
        width="18%"
        height="25%"
        fill="none"
        stroke="hsl(var(--champagne))"
        strokeWidth="1.5"
        className="opacity-60 animate-float-line"
        style={{ animationDelay: "2.5s", animationDuration: "14s" }}
      />

      {/* Middle horizontal line */}
      <line
        x1="0"
        y1="30%"
        x2="70%"
        y2="30%"
        stroke="hsl(var(--gold))"
        strokeWidth="1.5"
        className="opacity-70 animate-float-line"
        style={{ animationDelay: "0.8s", animationDuration: "11s" }}
      />

      {/* Rectangle middle-right */}
      <rect
        x="67%"
        y="30%"
        width="13%"
        height="30%"
        fill="none"
        stroke="hsl(var(--champagne))"
        strokeWidth="1.5"
        className="opacity-60 animate-float-line"
        style={{ animationDelay: "1.8s", animationDuration: "13s" }}
      />

      {/* Vertical line center-right */}
      <line
        x1="70%"
        y1="45%"
        x2="70%"
        y2="75%"
        stroke="hsl(var(--gold))"
        strokeWidth="1.5"
        className="opacity-70 animate-float-line"
        style={{ animationDelay: "3s", animationDuration: "15s" }}
      />

      {/* Bottom horizontal line */}
      <line
        x1="0"
        y1="85%"
        x2="65%"
        y2="85%"
        stroke="hsl(var(--gold))"
        strokeWidth="1.5"
        className="opacity-70 animate-float-line"
        style={{ animationDelay: "3.5s", animationDuration: "10s" }}
      />

      {/* Rectangle bottom-right */}
      <rect
        x="75%"
        y="70%"
        width="13%"
        height="22%"
        fill="none"
        stroke="hsl(var(--champagne))"
        strokeWidth="1.5"
        className="opacity-60 animate-float-line"
        style={{ animationDelay: "4.2s", animationDuration: "16s" }}
      />

      {/* Bottom left rectangle */}
      <rect
        x="0"
        y="92%"
        width="70%"
        height="8%"
        fill="none"
        stroke="hsl(var(--champagne))"
        strokeWidth="1.5"
        className="opacity-60 animate-float-line"
        style={{ animationDelay: "5s", animationDuration: "14s" }}
      />
    </svg>
  );
};

export default GeometricLines;
