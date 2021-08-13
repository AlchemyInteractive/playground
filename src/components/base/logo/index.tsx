import React from "react";
import Image from "next/image";

export const Logo: React.FC = () => {
    return (
        <Image
            src="/icons/logo.svg"
            alt="wildebeest logo"
            width="50"
            height="58"
        />
    );
};
