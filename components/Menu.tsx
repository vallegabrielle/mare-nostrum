"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const NAV_LINKS = ["Home", "About Us", "Menu", "Reservation"];

export const Menu = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative">
            <Button
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
                aria-expanded={open}
                className="flex flex-col gap-1.5 p-2"
            >
                <span
                    className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}
                />
                <span
                    className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${open ? "opacity-0" : ""}`}
                />
                <span
                    className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
                />
            </Button>

            {open && (
                <ul className="absolute right-0 top-full mt-2 bg-accent border border-border rounded-md shadow-lg py-2 min-w-40">
                    {NAV_LINKS.map((item) => (
                        <li key={item}>
                            <Button className="w-full text-left px-4 py-2 hover:bg-accent-hover hover:text-white">
                                {item}
                            </Button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
