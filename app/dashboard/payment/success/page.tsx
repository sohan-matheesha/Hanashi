import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-[#fff7fb] px-4 py-10">
      <div className="mx-auto max-w-xl rounded-3xl border border-pink-100 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 className="h-9 w-9 text-green-600" />
        </div>

        <h1 className="text-3xl font-bold text-[#32253a]">
          Payment Successful!
        </h1>

        <p className="mt-3 text-gray-600">
          Thank you for upgrading to Hanashi Premium. You can now access premium
          video lessons and notes.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/dashboard/video-lessons"
            className="rounded-2xl bg-[#c3829e] px-6 py-3 font-semibold text-white hover:bg-[#ad6f8b]"
          >
            Go to Video Lessons
          </Link>

          <Link
            href="/dashboard"
            className="rounded-2xl border border-pink-200 px-6 py-3 font-semibold text-[#32253a] hover:bg-pink-50"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}