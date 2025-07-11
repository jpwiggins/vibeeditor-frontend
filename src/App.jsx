import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import UploadForm from "./UploadForm";

const stripePromise = loadStripe("pk_live_51RagoSBlupvf8JxwMmt3eNsJzQJZFhkIR32grr3fOj2siLuK7GYNXUf4Bj2jp5QKEMuq8L2cTmQpDPsNlVBBDx5Q00YTWgQIWg");

export default function App() {
  return (
    <Elements stripe={stripePromise}>
      <UploadForm />
    </Elements>
  );
}
