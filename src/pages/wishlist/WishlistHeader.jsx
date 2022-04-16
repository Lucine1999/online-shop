import React from 'react';
import { Link } from 'react-router-dom';

export default function WishlistHeader({ t }) {
  return (
    <div className="wishlist-header-section">
      <div>
        <h1> {t('description.wishlist')} </h1>
        <p>
          <Link className="link-style1" to="/">
            Home
          </Link>{' '}
          / Wishlist
        </p>
      </div>
    </div>
  );
}
