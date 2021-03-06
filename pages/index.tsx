import React from "react";

import { Header, Main, Footer } from "@components/base";

const Home: React.FC = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default Home;
