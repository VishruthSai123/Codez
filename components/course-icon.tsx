import {
  Code,
  Terminal,
  Cpu,
  Globe,
  Database,
  Smartphone,
  Brain,
  Gamepad2,
  Coffee,
  Braces,
  FileJson,
  Layers,
  MonitorPlay
} from "lucide-react";
import { cn } from "@/lib/utils";

type CourseIconProps = {
  title: string;
  category?: string;
  className?: string;
  iconClassName?: string;
};

export const CourseIcon = ({ title, category, className, iconClassName }: CourseIconProps) => {
  const normalizedTitle = title.toLowerCase();
  const normalizedCategory = category?.toLowerCase() || "";

  let IconComponent = Code;

  // Title matching
  if (normalizedTitle.includes("python")) IconComponent = Terminal;
  else if (normalizedTitle.includes("java") && !normalizedTitle.includes("javascript")) IconComponent = Coffee;
  else if (normalizedTitle.includes("javascript") || normalizedTitle.includes("typescript")) IconComponent = FileJson;
  else if (normalizedTitle.includes("c++") || normalizedTitle.includes("c#") || normalizedTitle === "c") IconComponent = Cpu;
  else if (normalizedTitle.includes("kotlin") || normalizedTitle.includes("android") || normalizedTitle.includes("ios") || normalizedTitle.includes("swift")) IconComponent = Smartphone;
  else if (normalizedTitle.includes("go") || normalizedTitle.includes("rust")) IconComponent = Braces;
  else if (normalizedTitle.includes("sql") || normalizedTitle.includes("database")) IconComponent = Database;
  
  // Category fallback
  else if (normalizedCategory.includes("web") || normalizedCategory.includes("frontend")) IconComponent = Globe;
  else if (normalizedCategory.includes("ai") || normalizedCategory.includes("machine learning")) IconComponent = Brain;
  else if (normalizedCategory.includes("game")) IconComponent = Gamepad2;
  else if (normalizedCategory.includes("backend") || normalizedCategory.includes("systems")) IconComponent = Layers;
  else if (normalizedCategory.includes("design") || normalizedCategory.includes("ui")) IconComponent = MonitorPlay;

  return (
    <div className={cn("relative flex items-center justify-center bg-white", className)}>
      <IconComponent className={cn("text-slate-700", iconClassName)} />
    </div>
  );
};
