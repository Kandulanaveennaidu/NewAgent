
'use client';

import type { FC } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, RotateCcw, RotateCw, Save, ChevronsUpDown, Play, Rewind, FastForward, Volume2, Settings, Maximize2, Film, Image as ImageIconLucide, Type, Sparkles as ElementsIcon, Music } from 'lucide-react';

export const VideoPreviewSection: FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto rounded-xl shadow-2xl p-2 sm:p-3 bg-gradient-to-br from-neutral-800 to-neutral-900 relative">
      {/* Laptop Top Bezel */}
      <div className="h-4 sm:h-6 bg-neutral-900 rounded-t-lg flex items-center px-2 sm:px-3">
        <div className="flex space-x-1.5 sm:space-x-2">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>

      {/* Screen Area */}
      <div className="bg-neutral-950 aspect-[16/10] w-full overflow-hidden flex flex-col">
        {/* Editor Top Bar */}
        <div className="bg-neutral-800/70 text-white p-1.5 sm:p-2 flex items-center justify-between border-b border-neutral-700/50 h-10 sm:h-12 flex-shrink-0">
          <div className="flex items-center gap-1 sm:gap-2">
            <Button variant="ghost" size="icon" className="text-neutral-300 hover:text-white h-7 w-7 sm:h-8 sm:w-8">
              <ChevronLeft size={16} />
            </Button>
            <span className="text-xs sm:text-sm font-medium">New Video</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <Button variant="ghost" size="icon" className="text-neutral-300 hover:text-white h-7 w-7 sm:h-8 sm:w-8">
              <RotateCcw size={14} />
            </Button>
            <Button variant="ghost" size="icon" className="text-neutral-300 hover:text-white h-7 w-7 sm:h-8 sm:w-8">
              <RotateCw size={14} />
            </Button>
            <Button variant="ghost" size="sm" className="text-neutral-300 hover:text-white hover:bg-neutral-700 text-xs sm:text-sm h-7 sm:h-8 px-2 sm:px-3">
              <Save size={14} className="mr-1 sm:mr-2" />
              Save
            </Button>
          </div>
        </div>

        {/* Main Content Area (Sidebar + Preview) */}
        <div className="flex flex-1 overflow-hidden">
          {/* Left Sidebar */}
          <div className="w-12 sm:w-16 bg-neutral-800/50 p-1 sm:p-2 flex flex-col items-center space-y-3 sm:space-y-4 border-r border-neutral-700/50 flex-shrink-0">
            {[
              { icon: ImageIconLucide, label: 'Media' },
              { icon: Film, label: 'Templates' },
              { icon: Type, label: 'Text' },
              { icon: ElementsIcon, label: 'Elements' },
              { icon: Music, label: 'Audio' },
            ].map((item) => (
              <Button key={item.label} variant="ghost" size="icon" className="text-neutral-400 hover:text-white hover:bg-neutral-700 w-10 h-9 sm:w-10 sm:h-10 flex flex-col" title={item.label}>
                <item.icon size={16} />
                <span className="text-[8px] sm:text-[9px] mt-0.5">{item.label}</span>
              </Button>
            ))}
          </div>

          {/* Video Preview Area */}
          <div className="flex-1 bg-black relative flex items-center justify-center p-1 md:p-2 overflow-hidden">
             <video
              src="https://moneybrain-homepage.s3.ap-northeast-2.amazonaws.com/renewal_resources/videos/241023_studios3.3_real_final.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="object-contain w-full h-full rounded shadow-lg"
            />
          </div>
        </div>

        {/* Timeline Area */}
        <div className="bg-neutral-800/70 text-white p-1.5 sm:p-2 border-t border-neutral-700/50 h-24 sm:h-28 flex-shrink-0 flex flex-col">
          <div className="flex items-center justify-between mb-1 h-7 sm:h-8">
            <Button variant="ghost" size="sm" className="text-[10px] sm:text-xs text-neutral-300 hover:text-white hover:bg-neutral-700 h-6 sm:h-7 px-1.5 sm:px-2">
              <ChevronsUpDown size={12} className="mr-1 sm:mr-1.5" /> Transcript
            </Button>
            <div className="flex items-center gap-0.5 sm:gap-1">
              <Button variant="ghost" size="icon" className="text-neutral-300 hover:text-white h-6 w-6 sm:h-7 sm:w-7">
                <Rewind size={14} />
              </Button>
              <Button variant="ghost" size="icon" className="text-neutral-300 hover:text-white h-7 w-7 sm:h-8 sm:w-8 bg-neutral-700/50">
                <Play size={16} />
              </Button>
              <Button variant="ghost" size="icon" className="text-neutral-300 hover:text-white h-6 w-6 sm:h-7 sm:w-7">
                <FastForward size={14} />
              </Button>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs">
              <span>00:06 / 00:50</span>
              <Button variant="ghost" size="icon" className="text-neutral-300 hover:text-white h-6 w-6 sm:h-7 sm:w-7">
                <Volume2 size={14} />
              </Button>
              <Button variant="ghost" size="icon" className="text-neutral-300 hover:text-white h-6 w-6 sm:h-7 sm:w-7">
                <Settings size={14} />
              </Button>
               <Button variant="ghost" size="icon" className="text-neutral-300 hover:text-white h-6 w-6 sm:h-7 sm:w-7">
                <Maximize2 size={14} />
              </Button>
            </div>
          </div>
          {/* Timeline Tracks - Simplified */}
          <div className="flex-1 overflow-hidden relative pt-0.5 sm:pt-1">
            <div className="h-8 sm:h-10 bg-neutral-700/40 rounded flex items-center px-1 space-x-0.5">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className={`h-6 sm:h-8 flex-1 rounded-sm ${i === 3 || i === 4 ? 'bg-cyan-500/70' : 'bg-purple-500/40'}`}></div>
              ))}
            </div>
            <div className="absolute top-1/2 left-1/4 w-0.5 sm:w-1 h-8 sm:h-10 bg-red-500 transform -translate-y-1/2 z-10 rounded-full cursor-grab"></div>
             <div className="absolute top-[calc(50%+4px)] sm:top-[calc(50%+8px)] left-[calc(25%+1px)] sm:left-[calc(25%+2px)] transform -translate-x-1/2 -translate-y-full bg-blue-500 text-white text-[7px] sm:text-[8px] px-1 sm:px-1.5 py-0.5 rounded">
              Title Goes Here
            </div>
          </div>
        </div>
      </div>
       {/* Laptop Bottom Base */}
      <div className="h-2 sm:h-4 bg-neutral-800 rounded-b-lg"></div>
    </div>
  );
};
