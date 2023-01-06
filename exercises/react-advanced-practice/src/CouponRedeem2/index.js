import React, { useState } from 'react';

function CouponRedeem2 () {
    const [ coupon, setCoupon ] = useState({
        title: '$30 Free Meal Coupon',
        customerName:'Wonmi Kwon',
        used: false,
        message: { 
            beforeRedeem: "To use the coupon, please click the button below.",
            afterRedeem: "The coupon has been used."},
        couponCreated:'01/01/2023',
        couponUsed:'',
        expired: false,
        expirationDate: "01/31/2023"
    })
    
    const handleButtonClick = () => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;

        setCoupon(prevState => {
            return {
                ...prevState,
                used: true,
                couponUsed: today
            }
        })
    }

    return (
        <div>
            <h1>Coupon Redeem App</h1>
            <div>
                <p>Client Name: {coupon.title}</p>
                <p>Validity: {coupon.expired ? <span>Expired</span> : <span>Valid</span>} - <span>expiration date: {coupon.expirationDate}</span></p>
                <p>Coupon Name: {coupon.customerName}</p>
                <p> {coupon.used ? 
                coupon.message.afterRedeem : coupon.message.beforeRedeem
                }</p>
            </div>
            {!coupon.used && <button onClick={handleButtonClick}>Use the Coupon</button>}
        </div> 
    )
}

export default CouponRedeem2;