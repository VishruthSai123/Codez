"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Achievement = {
  id: number;
  title: string;
  description: string;
  icon_src: string;
};

type AchievementModalProps = {
  isOpen: boolean;
  onClose: () => void;
  achievement: Achievement | null;
};

export const AchievementModal = ({
  isOpen,
  onClose,
  achievement,
}: AchievementModalProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  if (!isClient || !achievement) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-white border-none rounded-3xl p-6 shadow-2xl relative overflow-hidden">
        {/* Sparkle background effects */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <DialogHeader className="relative z-10 flex flex-col items-center">
          <div className="mb-6 flex w-24 h-24 items-center justify-center bg-yellow-100 rounded-full border-4 border-yellow-200 animate-bounce p-3">
            <Image 
              src={achievement.icon_src || "/mascot.svg"} 
              alt={achievement.title} 
              height={80} 
              width={80} 
              className="object-contain"
            />
          </div>

          <DialogTitle className="text-center text-3xl font-extrabold text-slate-800 tracking-tight">
            🎉 Achievement Unlocked!
          </DialogTitle>

          <h3 className="text-center text-xl font-bold text-sky-500 mt-2">
            {achievement.title}
          </h3>

          <DialogDescription className="text-center text-base text-slate-500 mt-3 max-w-xs">
            {achievement.description}
          </DialogDescription>
        </DialogHeader>

        <div className="my-6 p-4 bg-slate-50 rounded-2xl border-2 border-slate-100 flex items-center justify-center gap-x-3 relative z-10">
          <Image src="/points.svg" alt="XP" height={24} width={24} />
          <span className="text-lg font-extrabold text-slate-700">Bonus XP Awarded!</span>
        </div>

        <DialogFooter className="relative z-10">
          <div className="flex w-full flex-col gap-y-4">
            <Button
              variant="primary"
              className="w-full shadow-lg font-bold text-lg h-12"
              size="lg"
              onClick={onClose}
            >
              Awesome!
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
