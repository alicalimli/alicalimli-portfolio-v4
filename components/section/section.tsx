import { ArrowRightIcon } from "lucide-react";
import { ReactNode } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import SpringyText from "../springy-text/SpringyText";
import { Envelope, Mailbox, PaperPlaneTilt } from "@phosphor-icons/react";

interface SectionProps {
  title: string;
  className?: string;
  headerClassName?: string;
  mainClassName?: string;
  viewAllLink?: string;
  children: ReactNode;
  titleIcon?: any;
  viewAllFunction?: () => void;
}

const Section = ({
  title,
  viewAllLink,
  viewAllFunction,
  className,
  headerClassName,
  mainClassName,
  children,
  titleIcon,
}: SectionProps) => {
  const Icon = titleIcon;

  return (
    <section className={cn("", className)}>
      <header className={cn("flex items-center mb-6", headerClassName)}>
        {/* <h4 className="scroll-m-20 text-xl font-semibold tracking-tight opacity-95">
          {title}
        </h4> */}
        <SpringyText
          className="justify-center text-2xl opacity-90"
          text={title}
        />

        {/* {titleIcon && <Icon weight="fill" className="ml-2 size-7 opacity-70" />} */}

        {!viewAllLink ? null : (
          <Button
            variant={"ghost"}
            data-umami-event={`${title}'s View All Button`}
            asChild
            className="ml-auto flex items-center gap-2 text-sm text-muted-foreground group"
          >
            <a rel="noopener noreferrer" target="_blank" href={viewAllLink}>
              View All
              <ArrowRightIcon className="w-5 group-hover:translate-x-1 duration-200" />
            </a>
          </Button>
        )}

        {viewAllFunction && (
          <Button
            variant={"ghost"}
            data-umami-event={`${title}'s View All Button`}
            onClick={() => viewAllFunction()}
            className="ml-auto flex items-center gap-2 text-sm text-muted-foreground group"
          >
            View All
            <ArrowRightIcon className="w-5 group-hover:translate-x-1 duration-200" />
          </Button>
        )}
      </header>

      <main className={mainClassName}>{children}</main>
    </section>
  );
};

export default Section;
