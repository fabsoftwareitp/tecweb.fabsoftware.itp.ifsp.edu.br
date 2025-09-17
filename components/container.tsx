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
        "md:max-w-[90vw] w-full md:mx-auto flex flex-col gap-48",
        className,
      )}
    >
      {children}
    </div>
  );
}
