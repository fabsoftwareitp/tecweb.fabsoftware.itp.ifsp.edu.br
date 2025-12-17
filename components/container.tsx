import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-[95vw] md:max-w-[90vw] w-full mx-auto flex flex-col gap-24 md:gap-48 px-4 md:px-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
