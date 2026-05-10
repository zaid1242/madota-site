import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glow?: boolean;
}

export function GlassCard({ children, className, glow = false, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden border border-glass-heavy bg-glass backdrop-blur-xl transition-all duration-700 hover:bg-glass-heavy",
        "shadow-glass-inset",
        glow && "hover:shadow-luxury-glow",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-glass-gradient opacity-50" />
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
}