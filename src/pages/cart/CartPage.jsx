import * as React from 'react';
import CartHeader from './CartHeader';
import CartProducts from './CartProducts';
// import CartTotal from "./CartTotal";
import { Container } from '@mui/material';

import './CartPage.css';

export default function CartPage({ t }) {
  return (
    <>
      <CartHeader t={t} />
      <Container style={{ marginTop: '80px', marginBottom: '20px' }}>
        <CartProducts t={t} />
      </Container>
    </>
  );
}
