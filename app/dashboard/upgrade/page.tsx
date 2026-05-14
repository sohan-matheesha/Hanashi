"use client";

import { useState } from "react";
import { Crown, Loader2 } from "lucide-react";

export default function UpgradePage() {
  const [loading, setLoading] = useState(false);

  async function handlePayment() {
    try {
      setLoading(true);

      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Payment failed. Please try again.");
        return;
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#fff7fb] px-4 py-10">
      <div className="mx-auto max-w-3xl rounded-3xl border border-pink-100 bg-white p-8 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ffe7de]">
            <Crown className="h-9 w-9 text-[#c3829e]" />
          </div>

          <div>
            <h1 className="text-3xl font-extrabold text-[#32253a]">
              Upgrade to Hanashi Premium
            </h1>
            <p className="text-gray-500">
              Unlock premium video lessons and notes.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-pink-100 bg-[#fffafd] p-6">
          <h2 className="text-2xl font-bold text-[#32253a]">Premium Access</h2>

          <p className="mt-3 text-gray-600">
            Get access to premium Hiragana, Katakana, and Vocabulary videos and
            learning notes after payment.
          </p>

          <div className="mt-6 rounded-2xl bg-white p-5">
            <p className="text-4xl font-extrabold text-[#c3829e]">Rs.5000</p>
            <p className="text-gray-500">One-time premium payment</p>
          </div>

          <button
            onClick={handlePayment}
            disabled={loading}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#c3829e] px-6 py-4 font-bold text-white transition hover:bg-[#ad6f8b] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Redirecting...
              </>
            ) : (
              "Pay Now"
            )}
          </button>

          <p className="mt-4 text-center text-sm text-gray-400">
            This uses Stripe Test Mode for academic demonstration.
          </p>
        </div>
      </div>
    </div>
  );
}