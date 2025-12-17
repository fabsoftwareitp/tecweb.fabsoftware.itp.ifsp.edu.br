import { InfoIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AlertProps {
  title: string;
  description: string;
  classnames: {
    title: string;
    description: string;
  };
}

export default function Alert({ title, description, classnames }: AlertProps) {
  return (
    <div className="rounded-md border px-4 py-3">
      <p className={cn("text-sm", classnames.title)}>
        <InfoIcon
          className="me-3 -mt-0.5 inline-flex text-blue-500"
          size={16}
          aria-hidden="true"
        />
        {title}
      </p>
      <p className={cn("text-sm", classnames.description)}>{description}</p>
    </div>
  );
}
