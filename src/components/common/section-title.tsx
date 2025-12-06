import { cn } from "@/lib/utils/utils";

interface SectionTitleProps {
  title: string;
  align?: "left" | "center" | "right";
  className?: string;
  lineWidth?: string;
}

export default function SectionTitle({
  title,
  align = "right",
  className,
  lineWidth,
}: SectionTitleProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div className={cn(alignmentClasses[align], className, "w-fit")}>
      <div className="flex flex-col items-center">
        <h2 className="text-[22px] font-bold relative inline-block">{title}</h2>
        <span
          className={cn(
            "block h-1 bg-second mt-2 relative",
            lineWidth ?? " w-1/2"
          )}
        ></span>
      </div>
    </div>
  );
}
