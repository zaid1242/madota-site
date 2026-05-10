import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({ subtitle, title, align = "left", className }: SectionHeadingProps) {
  const aligns = {
    left: "text-left",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div className={cn("flex flex-col gap-6", aligns[align], className)}>
      {subtitle && (
        <span className="font-sans text-xs uppercase tracking-[0.3em] text-soft/60">
          {subtitle}
        </span>
      )}
      <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight text-soft">
        {title}
      </h2>
    </div>
  );
}