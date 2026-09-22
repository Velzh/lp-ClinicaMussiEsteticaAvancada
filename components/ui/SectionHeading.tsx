import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  kicker: string;
  title: string;
  titleId?: string;
  support?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  kicker,
  title,
  titleId,
  support,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-2">
        {kicker}
      </p>
      <h2
        id={titleId}
        className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-tight text-ink"
      >
        {title}
      </h2>
      {support ? (
        <p className="mt-4 text-base leading-relaxed text-muted">{support}</p>
      ) : null}
    </div>
  );
}
