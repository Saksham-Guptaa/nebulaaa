"use client";
import CheckoutForm from "@/components/CheckoutForm";

const Checkout: React.FC = () => {
  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm />
      <p>Loading payment gateway...</p>
    </div>
  );
};

export default Checkout;
