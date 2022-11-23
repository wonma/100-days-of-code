import React, { useState } from 'react';

function CouponRedeem() {
  const [coupon, setCoupon] = useState({
    customer: 'Jennifer Smith',
    isValid: true,
    status: 'Free dinner for 4 guests',
    instruction: 'To use your coupon, click the button below.'
  });

  const handleUpdate = () => {
    setCoupon(prevState => {
      return {
        ...prevState,
        status: 'Your coupon has been used.',
        instruction: 'Please visit our restaurant to renew your gift card.',
        isValid: false
      };
    });
  };

  return (
    <div>
      <h1>Gift Card Page</h1>
      <p>Customer: {coupon.customer}</p>
      <p>{coupon.status}</p>
      <p>{coupon.instruction}</p>
      {coupon.isValid && (
        <button onClick={handleUpdate}>Spend Gift Card</button>
      )}
    </div>
  );
}

export default CouponRedeem;
