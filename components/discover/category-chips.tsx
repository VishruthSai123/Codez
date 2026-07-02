import { cn } from "@/lib/utils";

type CategoryChipsProps = {
  categories: string[];
  selectedCategory: string | null;
  onSelect: (category: string | null) => void;
};

export const CategoryChips = ({ categories, selectedCategory, onSelect }: CategoryChipsProps) => {
  return (
    <div className="w-full overflow-x-auto hide-scrollbar py-2 mb-2 px-2">
      <div className="flex items-center gap-3 min-w-max pb-2">
        <button
          onClick={() => onSelect(null)}
          className={cn(
            "px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-sm active:scale-95",
            selectedCategory === null
              ? "bg-sky-500 text-white border-2 border-sky-600"
              : "bg-white text-slate-500 border-2 border-slate-200 hover:bg-slate-50"
          )}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={cn(
              "px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-sm active:scale-95",
              selectedCategory === category
                ? "bg-sky-500 text-white border-2 border-sky-600"
                : "bg-white text-slate-500 border-2 border-slate-200 hover:bg-slate-50"
            )}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};
