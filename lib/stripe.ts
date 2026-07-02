import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_API_SECRET_KEY || "dummy_key_to_prevent_startup_crash", {
  apiVersion: "2026-06-24.dahlia",
  typescript: true,
});
