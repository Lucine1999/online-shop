import React from 'react';
import { Link } from 'react-router-dom';

export default function CartHeader({ t }) {
  return (
    <div className="cart-header-section">
      <div>
        <h1>{t('description.shoppingCart')}</h1>

        <p>
          <Link className="link-style" to="/">
            Home
          </Link>{' '}
          / Shopping Cart
        </p>
      </div>
    </div>
  );
}
