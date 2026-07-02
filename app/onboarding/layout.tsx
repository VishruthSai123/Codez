import type { ReactNode } from "react";

type OnboardingLayoutProps = {
  children: ReactNode;
};

const OnboardingLayout = ({ children }: OnboardingLayoutProps) => {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-slate-50">
      <main className="w-full max-w-4xl px-4 py-8 md:px-8">
        {children}
      </main>
    </div>
  );
};

export default OnboardingLayout;
