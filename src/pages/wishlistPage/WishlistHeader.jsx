import React from "react";
import { Link } from "react-router-dom";

export default function WishlistHeader() {
    return (
        <div className="wishlist-header-section">
            <div>
                <h1> Wishlist </h1>
                <p>
                    <Link className="link-style1" to="/">
                        Home
                    </Link>{" "}
                    / Wishlist
                </p>
            </div>
        </div>
    );
}
