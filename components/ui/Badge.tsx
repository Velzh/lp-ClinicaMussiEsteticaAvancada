import { cn } from "@/lib/cn";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-medium tracking-wide text-accent",
        className,
      )}
    >
      {children}
    </span>
  );
}
