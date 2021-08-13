import React from "react";
import Image from "next/image";

import styles from "./index.module.scss";

export const Footer: React.FC = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.icons}>
                <a href="https://github.com/AlchemyInteractive" target="_blank">
                    <Image
                        src="/icons/github-icon.svg"
                        alt="github"
                        width="28"
                        height="29"
                    />
                </a>
                <a href="https://twitter.com/wildebeest_dev" target="_blank">
                    <Image
                        src="/icons/twitter-icon.svg"
                        alt="twitter"
                        width="28"
                        height="28"
                    />
                </a>
                <a
                    href="https://www.linkedin.com/company/wildebee-st/"
                    target="_blank"
                >
                    <Image
                        src="/icons/linkedin-icon.svg"
                        alt="linkedin"
                        width="28"
                        height="32"
                    />
                </a>
            </div>
        </div>
    );
};
