import Image from "next/image";
import { notFound } from "next/navigation";
import { getCertificateByVerificationId } from "@/db/queries";
import { Button } from "@/components/ui/button";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { CertificateActions } from "../components/certificate-actions";

type Props = {
  params: Promise<{
    verificationId: string;
  }>;
};

export default async function CertificatePage({ params }: Props) {
  const resolvedParams = await params;
  const certificate = await getCertificateByVerificationId(resolvedParams.verificationId);

  if (!certificate) {
    notFound();
  }

  const studentName = certificate.user_progress?.user_name || "Developer";
  const courseTitle = certificate.courses?.title || "Course";
  const completionDate = new Date(certificate.issue_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const verificationId = certificate.verification_id;

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center print:bg-white print:py-0 print:px-0">
      {/* Top Header Controls */}
      <div className="w-full max-w-[850px] flex items-center justify-between mb-4 print:hidden">
        <Link href="/learn">
          <Button variant="ghost" className="font-bold text-slate-500 hover:text-slate-700 flex items-center gap-x-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Dashboard</span>
          </Button>
        </Link>
        <div className="flex items-center gap-x-2 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          <ShieldCheck className="w-4 h-4" />
          <span className="text-xs font-bold uppercase tracking-wider">Verified Credential</span>
        </div>
      </div>

      {/* Interactivity Actions Wrapper */}
      <CertificateActions 
        verificationId={verificationId}
        studentName={studentName}
        courseTitle={courseTitle}
      />

      {/* Main Certificate Container */}
      <div className="w-full max-w-[850px] aspect-[1.414] bg-white border-[16px] border-double border-slate-200 p-8 sm:p-12 relative flex flex-col justify-between shadow-2xl rounded-sm print:shadow-none print:border-[10px] print:my-0 print:mx-auto">
        
        {/* Decorative corner borders */}
        <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-yellow-500"></div>
        <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-yellow-500"></div>
        <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-yellow-500"></div>
        <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-yellow-500"></div>

        {/* Certificate Header */}
        <div className="text-center flex flex-col items-center mt-4">
          <div className="w-20 h-20 relative mb-4">
            <Image src="/mascot.svg" alt="Codez Logo" fill className="object-contain" />
          </div>
          <h1 className="text-sm font-extrabold tracking-[0.25em] uppercase text-sky-500 mb-2">
            Codez Academy
          </h1>
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-800 tracking-wide font-normal italic">
            Certificate of Completion
          </h2>
          <div className="w-24 h-[2px] bg-yellow-500 my-4 sm:my-6"></div>
        </div>

        {/* Certificate Body */}
        <div className="text-center px-4 sm:px-8 my-4 flex-1 flex flex-col justify-center">
          <p className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-2">
            This is proudly presented to
          </p>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight border-b border-slate-100 pb-2 max-w-lg mx-auto w-full">
            {studentName}
          </p>
          <p className="text-slate-500 text-sm font-medium mt-6 leading-relaxed">
            for successfully completing the curriculum and projects for the course
          </p>
          <p className="text-2xl sm:text-3xl font-extrabold text-sky-500 mt-2 tracking-tight">
            {courseTitle}
          </p>
          <p className="text-slate-400 text-xs font-medium mt-4">
            on {completionDate}
          </p>
        </div>

        {/* Certificate Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-6 border-t border-slate-100 pt-6 text-slate-400 text-[10px]">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-start gap-y-1 mb-4 sm:mb-0">
            <span className="font-bold text-slate-500 uppercase tracking-wider">Verification Authority</span>
            <span>Codez Verification Service</span>
            <span className="font-mono text-slate-400 select-all">Credential ID: {verificationId}</span>
          </div>

          {/* Golden Seal Decoration */}
          <div className="w-20 h-20 relative flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 border-4 border-yellow-200 shadow-md">
            <div className="absolute w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full border border-dashed border-yellow-100"></div>
            <div className="text-center text-white flex flex-col items-center">
              <span className="font-extrabold text-[8px] tracking-wider uppercase">Official</span>
              <span className="font-extrabold text-[10px] tracking-wider uppercase">Seal</span>
            </div>
            {/* Ribbon tails */}
            <div className="absolute -bottom-4 left-4 w-4 h-8 bg-yellow-600 origin-top rotate-12 -z-10 [clip-path:polygon(0_0,100%_0,100%_100%,50%_80%,0_100%)]"></div>
            <div className="absolute -bottom-4 right-4 w-4 h-8 bg-yellow-500 origin-top -rotate-12 -z-10 [clip-path:polygon(0_0,100%_0,100%_100%,50%_80%,0_100%)]"></div>
          </div>

          <div className="flex flex-col items-center sm:items-end text-center sm:text-end gap-y-1">
            <span className="font-bold text-slate-500 uppercase tracking-wider">Instructor Signature</span>
            <div className="font-serif italic text-slate-700 text-lg my-1">
              Guido & the Codez Team
            </div>
            <div className="w-28 h-[1px] bg-slate-200"></div>
          </div>
        </div>

      </div>

      {/* Public Verification Info Card */}
      <div className="w-full max-w-[850px] mt-8 bg-white border-2 border-slate-100 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between shadow-sm print:hidden">
        <div className="flex items-center gap-x-4 mb-4 sm:mb-0">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl border border-emerald-100">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-slate-800 text-sm">Verified Student Credential</h4>
            <p className="text-xs text-slate-500 mt-0.5">This certificate represents a verified learning record completed on Codez.</p>
          </div>
        </div>
        <Link href={`/profile`}>
          <Button variant="ghost" className="font-bold text-sky-500">
            View Student Profile
          </Button>
        </Link>
      </div>
    </div>
  );
}
