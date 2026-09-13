import React from 'react';

const ProfileHeroVisual: React.FC = () => {
  const photoUrl = "https://res.cloudinary.com/dodhvvewu/image/upload/v1768406215/31bf4861-6535-4127-b55d-b6be23cc4749_xxzvff.jpg";

  return (
    <div className="relative w-full max-w-[380px] sm:max-w-[420px] mx-auto lg:ml-auto">
      {/* Editorial photo frame with subtle technical metadata accents */}
      <div className="relative rounded-2xl border border-zinc-200 bg-white p-3 shadow-xs">
        {/* Top telemetry bar */}
        <div className="flex items-center justify-between px-2 pb-2.5 text-[10px] font-mono text-zinc-400 border-b border-zinc-100">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            SOURISH_DEY &bull; B.TECH CS
          </span>
          <span>SYSTEM ENG</span>
        </div>

        {/* Photo Container */}
        <div className="relative overflow-hidden rounded-xl mt-2.5 aspect-4/5 bg-zinc-100 border border-zinc-100 group">
          <img
            src={photoUrl}
            alt="Sourish Dey"
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            loading="eager"
          />

          {/* Minimalist corner crosshairs / technical focus marks */}
          <div className="absolute top-2.5 left-2.5 text-[9px] font-mono font-medium text-white bg-zinc-950/70 px-2 py-0.5 rounded shadow-xs backdrop-blur-xs">
            KIIT &bull; 2026
          </div>
          <div className="absolute bottom-2.5 right-2.5 text-[9px] font-mono font-medium text-white bg-zinc-950/70 px-2 py-0.5 rounded shadow-xs backdrop-blur-xs">
            DATA / AI / MLOps
          </div>
        </div>

        {/* Bottom subtle metadata label */}
        <div className="flex items-center justify-between px-2 pt-2.5 text-[10px] font-mono text-zinc-400 border-t border-zinc-100 mt-2.5">
          <span>RESEARCH &bull; PATENTS &bull; CODE</span>
          <span>INDIA</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeroVisual;
