const DecorativeFrames = () => {
  return (
    <>
      {/* Top Left Red Frame */}
      <div className="absolute top-12 left-8 w-64 h-32 border-l-2 border-t-2 border-[#C64B4B] opacity-40 pointer-events-none" />
      
      {/* Top Right Purple Frame */}
      <div className="absolute top-20 right-12 w-80 h-48 border-r-2 border-t-2 border-[#9B59B6] opacity-40 pointer-events-none" />
      
      {/* Bottom Left Orange Frame */}
      <div className="absolute bottom-32 left-16 w-56 h-40 border-l-2 border-b-2 border-[#E67E22] opacity-40 pointer-events-none" />
      
      {/* Bottom Right Blue Frame */}
      <div className="absolute bottom-24 right-20 w-48 h-36 border-r-2 border-b-2 border-[#3498DB] opacity-40 pointer-events-none" />
      
      {/* Center Diagonal Element */}
      <div className="absolute top-1/2 left-1/4 w-32 h-32 border-2 border-[#95A5A6] opacity-20 pointer-events-none transform rotate-45" />
    </>
  );
};

export default DecorativeFrames;
