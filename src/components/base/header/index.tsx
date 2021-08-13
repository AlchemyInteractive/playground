import React from "react";
import styles from "./index.module.scss";

import { Logo } from "@components/base";

export const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <Logo />
            <div className={styles.title}>WILDEBEEST</div>;
        </div>
    );
};
