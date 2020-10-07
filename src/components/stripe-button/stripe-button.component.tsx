import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './stripe-button.styles.scss';

const StripeButton = ({price}: any) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HZPIhAOkjlv9Cwnr8J7SzjlhRdrgO47crdT8YWkGhiFbiJp4U0xWoxqX0Bxwal27F75MwMnlUmJz8lhWUXJEupf00M8qGD8Oo';

  const onToken = (token: any) => {
    console.log(token)
    alert('Payment Successful')
  }
  return (
    <StripeCheckout 
      label='Pay Now'
      name='Misteryi Box'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeButton;