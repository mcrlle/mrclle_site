
import React from 'react';

const BackgroundAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10 pointer-events-none bg-[#050505]">
      {/* Animated Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/10 rounded-full blur-[120px] animate-blob"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
      <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-neutral-800/20 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>

      {/* Noise Texture Over */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none" 
        style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}>
      </div>

      {/* Structural Elements */}
      <div className="absolute inset-0 bg-grid opacity-[0.03]"></div>
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.8)_100%)]"></div>

      {/* Decorative Crosses (Corners) */}
      <div className="absolute top-10 left-10 w-4 h-4 flex items-center justify-center opacity-10">
         <div className="w-full h-[1px] bg-white absolute"></div>
         <div className="h-full w-[1px] bg-white absolute"></div>
      </div>
      <div className="absolute top-10 right-10 w-4 h-4 flex items-center justify-center opacity-10">
         <div className="w-full h-[1px] bg-white absolute"></div>
         <div className="h-full w-[1px] bg-white absolute"></div>
      </div>
      <div className="absolute bottom-10 left-10 w-4 h-4 flex items-center justify-center opacity-10">
         <div className="w-full h-[1px] bg-white absolute"></div>
         <div className="h-full w-[1px] bg-white absolute"></div>
      </div>
      <div className="absolute bottom-10 right-10 w-4 h-4 flex items-center justify-center opacity-10">
         <div className="w-full h-[1px] bg-white absolute"></div>
         <div className="h-full w-[1px] bg-white absolute"></div>
      </div>
    </div>
  );
};

export default BackgroundAnimation;
