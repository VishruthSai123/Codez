type DiscoverHeaderProps = {
  userName?: string;
};

export const DiscoverHeader = ({ userName }: DiscoverHeaderProps) => {
  return (
    <div className="flex items-center justify-between w-full mb-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight">Discover</h1>
        <p className="text-slate-500 text-sm md:text-base font-medium">What would you like to learn, <span className="font-bold text-slate-700">{userName || "Developer"}</span>?</p>
      </div>
    </div>
  );
};
