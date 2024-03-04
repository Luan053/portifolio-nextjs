import { cn } from "@/app/lib/utils";

type SectionTitleProps = {
  title: string;
  subtitle: string;
  className?: string;
};

export const SectionTitle = ({
  title,
  subtitle,
  className,
}: SectionTitleProps) => {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <span className="text-sm font-mono text-sky-400">{`../${subtitle}`}</span>
      <span className="text-3xl font-medium">{title}</span>
    </div>
  );
};
