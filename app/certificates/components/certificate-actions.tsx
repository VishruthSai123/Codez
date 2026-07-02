"use client";

import { Button } from "@/components/ui/button";
import { Printer, Share2, Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

type CertificateActionsProps = {
  verificationId: string;
  studentName: string;
  courseTitle: string;
};

export const CertificateActions = ({
  verificationId,
  studentName,
  courseTitle,
}: CertificateActionsProps) => {
  const [copied, setCopied] = useState(false);
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Codez Certificate - ${studentName}`,
          text: `I just completed the ${courseTitle} course on Codez! Check out my verified certificate.`,
          url: shareUrl,
        });
        toast.success("Shared successfully!");
      } catch (err) {
        // Share cancelled or failed
      }
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast.success("Certificate link copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="mb-8 flex flex-wrap gap-4 items-center justify-center print:hidden">
      <Button 
        variant="primary" 
        className="font-bold flex items-center gap-x-2 shadow-md hover:shadow-lg transition-all"
        onClick={handlePrint}
      >
        <Printer className="w-5 h-5" />
        <span>Print / Save PDF</span>
      </Button>

      <Button 
        variant="secondary" 
        className="font-bold flex items-center gap-x-2 border-2 border-slate-200 shadow-sm hover:shadow-md transition-all bg-white text-slate-600"
        onClick={handleShare}
      >
        {copied ? <Check className="w-5 h-5 text-emerald-500" /> : <Share2 className="w-5 h-5 text-slate-500" />}
        <span>{copied ? "Link Copied" : "Share Certificate"}</span>
      </Button>
    </div>
  );
};
