"use client"
import { loadStripe, Stripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/components/CheckoutForm";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string);

const Checkout: React.FC = () => {
  return (
    <div>
      <h1>Checkout</h1>
      {stripePromise ? (
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      ) : (
        <p>Loading payment gateway...</p>
      )}
    </div>
  );
};

export default Checkout;
