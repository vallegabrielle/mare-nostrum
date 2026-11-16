import { Button } from "./ui/Button";
import { Logo } from "./ui/Logo";

export const NavItems = () => {
    return (
        <ul className="flex items-center justify-center">
            <li className="pr-4">
                <Button size="lg">Home</Button>
            </li>
            <li className="pr-4">
                <Button size="lg">About Us</Button>
            </li>
            <li className="m-auto">
                <Logo size={150} />
            </li>
            <li className="pr-4">
                <Button size="lg">Menu</Button>
            </li>
            <li className="pr-4">
                <Button size="lg">Reservation</Button>
            </li>
        </ul>
    );
};
