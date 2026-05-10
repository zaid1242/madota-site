import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "fluid";
}

export function Container({ children, className, size = "lg", ...props }: ContainerProps) {
  const sizes = {
    sm: "max-w-4xl",
    md: "max-w-6xl",
    lg: "max-w-[1400px]",
    fluid: "max-w-full",
  };

  return (
    <div
      className={cn("mx-auto w-full px-6 md:px-12 lg:px-24", sizes[size], className)}
      {...props}
    >
      {children}
    </div>
  );
}