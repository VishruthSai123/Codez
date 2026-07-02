"use server";

import { getUserSubscription } from "@/db/queries";
import { stripe } from "@/lib/stripe";
import { absoluteUrl } from "@/lib/utils";
import { createClient } from "@/lib/supabase/server";

const returnUrl = absoluteUrl("/shop");

export const createStripeUrl = async () => {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return { error: "Unauthorized." };
  const userId = user.id;

  if (!process.env.STRIPE_API_SECRET_KEY) {
    return { error: "Stripe payments are not configured on this server." };
  }

  const userSubscription = await getUserSubscription();

  try {
  // redirect user to customer portal who already have a subscription
  if (userSubscription && userSubscription.stripe_customer_id) {
    const stripeSession = await stripe.billingPortal.sessions.create({
      customer: userSubscription.stripe_customer_id,
      return_url: returnUrl,
    });

    return { data: stripeSession.url };
  }

  // checkout
  const stripeSession = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    customer_email: user.email!,
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "USD",
          product_data: {
            name: "Lingo Pro",
            description: "Unlimited hearts.",
          },
          unit_amount: 2000, // $20.00 USD
          recurring: {
            interval: "month",
          },
        },
      },
    ],
    metadata: {
      userId,
    },
    success_url: returnUrl,
    cancel_url: returnUrl,
  });

  return { data: stripeSession.url };
} catch (error) {
  console.error("Stripe API Error:", error);
  return { error: "Failed to create checkout session." };
}
};
