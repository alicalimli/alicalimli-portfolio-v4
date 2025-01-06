import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const modernInputClassName =
  "block py-2.5 px-0 w-full text-lg text-white/90 bg-transparent border-input appearance-none focus:outline-none focus:ring-0 focus:border-primary peer pb-6";

interface ModernInputProps {
  label: string;
  customInput?: (inputId: string, className: string) => ReactNode;
  labelClassName?: string;
  className?: string;
  number: string;
  isFirst?: boolean;
  placeholder?: string;
}

const ModernInput = ({
  label,
  customInput,
  className,
  number,
  placeholder = " ",
  labelClassName,
  isFirst,

  ...rest
}: ModernInputProps) => {
  return (
    <section
      className={cn(
        "relative z-0 flex items-start gap-4 p-6 pl-0 pb-0  border-white/20",
        isFirst ? "border-b" : "border-b"
      )}
    >
      <small className="font-semibold opacity-30">{number}</small>
      <div className="flex flex-col-reverse w-full">
        {customInput ? (
          customInput("modern-standard", modernInputClassName)
        ) : (
          <input
            id="modern-standard"
            className={cn(modernInputClassName, className)}
            placeholder={placeholder}
            {...rest}
          />
        )}
        <label
          htmlFor="modern-standard"
          className={cn(
            "text-lg leading-[1.2] duration-300 peer-placeholder-shown:opacity-80 opacity-30 font-medium",
            labelClassName
          )}
        >
          {label}
        </label>
      </div>
    </section>
  );
};

export default ModernInput;
