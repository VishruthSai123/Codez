type EmptyStateProps = {
  title: string;
  description: string;
  imageSrc?: string;
};

export const EmptyState = ({ title, description, imageSrc = "/mascot_sad.svg" }: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center w-full">
      <img src={imageSrc} alt="Empty State" className="w-32 h-32 mb-6 grayscale opacity-60" />
      <h3 className="text-xl font-bold text-slate-700 mb-2">{title}</h3>
      <p className="text-slate-500 max-w-sm">{description}</p>
    </div>
  );
};
