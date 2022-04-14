import * as React from "react";
import WishlistHeader from "./WishlistHeader";
import WishlistProducts from "./WishlistProducts";
import { Container } from "@mui/material";

import "./WishlistPage.css";

export default function WishlistPage({t}) {
    return (
        <>
            <WishlistHeader t={t}/>
            <Container style={{ marginTop: "80px", marginBottom: "20px" }}>
                <WishlistProducts t = {t}/>
            </Container>
        </>
    );
}

