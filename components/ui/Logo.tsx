import Image from "next/image";

type sizeProps = {
    size: number;
};

export const Logo = ({ size }: sizeProps) => {
    return (
        <Image
            className="mix-blend-luminosity"
            alt="Mare Nostrum Logo"
            src="/assets/logo.png"
            width={size}
            height={size}
        />
    );
};
