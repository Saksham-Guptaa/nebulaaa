// "use client"
// import { useState, FormEvent } from "react";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import { doc, updateDoc } from "firebase/firestore";

// const CheckoutForm: React.FC = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     const user = auth.currentUser;
//     if (!user) {
//       alert("You must be logged in to make a payment");
//       setLoading(false);
//       return;
//     }

//     try {
//       const { data: clientSecret } = await axios.post("/api/create-payment-intent", {
//         email: user.email,
//         membership: "Membership Type Here", // Replace with selected membership
//       });

//       if (!stripe || !elements) {
//         alert("Stripe has not loaded properly.");
//         setLoading(false);
//         return;
//       }

//       const cardElement = elements.getElement(CardElement);
//       if (!cardElement) {
//         alert("Card element not found");
//         setLoading(false);
//         return;
//       }

//       const result = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: cardElement,
//         },
//       });

//       if (result.error) {
//         alert(result.error.message);
//       } else if (result.paymentIntent?.status === "succeeded") {
//         await updateDoc(doc(db, "users", user.uid), { isVerified: true });
//         alert("Payment successful and profile verified!");
//         router.push("/dashboard");
//       }
//     } catch (error: any) {
//       alert(error.message || "An error occurred during payment.");
//     }

//     setLoading(false);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement />
//       <button type="submit" disabled={loading || !stripe || !elements}>
//         {loading ? "Processing..." : "Pay Now"}
//       </button>
//     </form>
//   );
// };

// export default CheckoutForm;

import React from "react";

type Props = {};

const CheckoutForm = (props: Props) => {
  return <div>CheckoutForm</div>;
};

export default CheckoutForm;
