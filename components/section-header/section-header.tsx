import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  className?: string;
  viewAllLink?: string;
}

const SectionHeader = ({
  title,
  viewAllLink,
  className,
}: SectionHeaderProps) => {
  return (
    <header className={cn("flex items-center mb-3", className)}>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight opacity-95">
        {title}
      </h4>

      {!viewAllLink ? null : (
        <Button
          variant={"ghost"}
          asChild
          className="ml-auto flex items-center gap-2 text-sm text-muted-foreground group"
        >
          <a rel="noopener noreferrer" target="_blank" href={viewAllLink}>
            View All
            <ArrowRightIcon className="w-5 group-hover:translate-x-1 duration-200" />
          </a>
        </Button>
      )}
    </header>
  );
};

export default SectionHeader;
