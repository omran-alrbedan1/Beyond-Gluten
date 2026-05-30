import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const sectionVariants = cva(
  "relative w-full",
  {
    variants: {
      variant: {
        default: "bg-white",
        ivory: "bg-[#f9f7f5]",
        onyx: "bg-[#1a1a1a]",
        gold: "bg-[#E6C687]",
      },
      spacing: {
        sm: "py-8",
        md: "py-12",
        lg: "py-16",
        xl: "py-20",
      },
    },
    defaultVariants: {
      variant: "default",
      spacing: "lg",
    },
  }
);

export interface SectionProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof sectionVariants> {
  id?: string;
}

export function Section({ className, variant, spacing, id, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(sectionVariants({ variant, spacing, className }))}
      {...props}
    />
  );
}
