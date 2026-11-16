import { Menu } from "../Menu";
import { NavItems } from "../NavItems";
import { Logo } from "../ui/Logo";

export const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-background border-b border-border">
            <nav className="max-w-7xl mx-auto px-6 py-3 hidden md:block">
                <NavItems />
            </nav>

            <nav className="px-5 py-3 flex items-center justify-between md:hidden">
                <Logo size={80} />
                <Menu />
            </nav>
        </header>
    );
};
