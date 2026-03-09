import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const buttonVariants = cva(
    [
        "cursor-pointer",
        "border border-foreground border-3",
        "active:shadow-[-6px_6px_0px_0px_var(--color-foreground)]",
        "disabled:opacity-50 disabled:pointer-events-none",
        "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-foreground focus-visible:ring-offset-1",
        "transition",
    ].join(" "),
    {
        variants: {
            variant: {
                primary:
                    "bg-accent text-surface hover:text-background hover:bg-foreground",
                secondary:
                    "bg-surface text-foreground hover:bg-accent-hover hover:text-background",
            },
            size: {
                sm: "px-4 py-1 text-sm rounded-md",
                md: "px-6 py-1 text-lg rounded-lg",
                lg: "px-7 py-2 text-xl rounded-lg",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    },
);

interface ButtonProps
    extends
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        { children, className, variant, size, isLoading, disabled, ...props },
        ref,
    ) => {
        return (
            <button
                ref={ref}
                className={cn(
                    buttonVariants({
                        className,
                        variant,
                        size,
                    }),
                )}
                disabled={isLoading || disabled}
                aria-busy={isLoading}
                {...props}
            >
                {children}
            </button>
        );
    },
);

Button.displayName = "Button";

export default Button;
