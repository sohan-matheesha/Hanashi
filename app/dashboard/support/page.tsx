import Link from "next/link";
import { redirect } from "next/navigation";
import {
  ArrowLeft,
  Send,
  MessageCircle,
  Clock,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { createClient } from "@/utils/supabase/server";

type StudentRequest = {
  id: string;
  issue_type: string;
  subject: string;
  message: string;
  status: string | null;
  teacher_reply: string | null;
  created_at: string;
};

export default async function StudentSupportPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  async function submitSupportRequest(formData: FormData) {
    "use server";

    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      redirect("/login");
    }

    const issueType = String(formData.get("issue_type") || "");
    const subject = String(formData.get("subject") || "");
    const message = String(formData.get("message") || "");

    if (!issueType || !subject || !message) {
      redirect("/dashboard/support?error=missing");
    }

    const { error } = await supabase.from("student_teacher_requests").insert({
      student_id: user.id,
      issue_type: issueType,
      subject,
      message,
      status: "pending",
    });

    if (error) {
      console.error("Support request error:", error);
      redirect("/dashboard/support?error=failed");
    }

    redirect("/dashboard/support?success=true");
  }

  const { data: requestsData } = await supabase
    .from("student_teacher_requests")
    .select("id, issue_type, subject, message, status, teacher_reply, created_at")
    .eq("student_id", user.id)
    .order("created_at", { ascending: false });

  const requests = (requestsData ?? []) as StudentRequest[];

  return (
    <div className="min-h-screen bg-[#f8f5ff] px-4 py-8 text-[#17123f] md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-2xl border border-purple-200 bg-white px-5 py-3 text-sm font-extrabold text-[#4c1d95] shadow-sm transition hover:bg-purple-50"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>
        </div>

        <div className="mb-8 overflow-hidden rounded-[36px] bg-linear-to-br from-[#070b2d] via-[#1b0b4d] to-[#4c1d95] p-8 text-white shadow-[0_24px_70px_rgba(76,29,149,0.28)]">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-pink-200">
            Student Support
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Ask your teacher for help 🌸
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-purple-100 md:text-base">
            If you have a problem while learning Japanese, send your question or
            issue to your teacher. Your teacher can review it and reply later.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px]">
          <section className="rounded-3xl border border-purple-100 bg-white/95 p-6 shadow-[0_20px_60px_rgba(70,38,120,0.12)] md:p-8">
            <div className="mb-6">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-[#7c3aed]">
                <Send className="h-7 w-7" />
              </div>

              <h2 className="text-2xl font-extrabold text-[#17123f]">
                Send a Support Request
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#6b5b95]">
                Explain your issue clearly so your teacher can understand and
                help you quickly.
              </p>
            </div>

            <form action={submitSupportRequest} className="space-y-5">
              <div>
                <label
                  htmlFor="issue_type"
                  className="mb-2 block text-sm font-extrabold text-[#4c1d95]"
                >
                  Issue Type
                </label>

                <select
                  id="issue_type"
                  name="issue_type"
                  required
                  className="w-full rounded-2xl border border-purple-200 bg-purple-50/60 px-4 py-4 text-sm font-semibold text-[#17123f] outline-none transition focus:border-[#7c3aed] focus:bg-white"
                >
                  <option value="">Select issue type</option>
                  <option value="Lesson Problem">Lesson Problem</option>
                  <option value="Quiz Problem">Quiz Problem</option>
                  <option value="Video Lesson Problem">Video Lesson Problem</option>
                  <option value="Grammar Question">Grammar Question</option>
                  <option value="Vocabulary Question">Vocabulary Question</option>
                  <option value="Conversation Practice Help">
                    Conversation Practice Help
                  </option>
                  <option value="Technical Issue">Technical Issue</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-extrabold text-[#4c1d95]"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Example: I cannot understand Hiragana lesson 2"
                  className="w-full rounded-2xl border border-purple-200 bg-purple-50/60 px-4 py-4 text-sm font-semibold text-[#17123f] outline-none transition placeholder:text-[#9b8bc6] focus:border-[#7c3aed] focus:bg-white"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-extrabold text-[#4c1d95]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={7}
                  placeholder="Write your problem or question here..."
                  className="w-full resize-none rounded-2xl border border-purple-200 bg-purple-50/60 px-4 py-4 text-sm font-semibold leading-7 text-[#17123f] outline-none transition placeholder:text-[#9b8bc6] focus:border-[#7c3aed] focus:bg-white"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-[#4c1d95] to-[#7c3aed] px-6 py-4 text-sm font-extrabold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Send Request
                <Send className="h-4 w-4" />
              </button>
            </form>
          </section>

          <section className="rounded-3xl border border-purple-100 bg-white/95 p-6 shadow-[0_20px_60px_rgba(70,38,120,0.12)]">
            <div className="mb-6">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 text-pink-600">
                <MessageCircle className="h-7 w-7" />
              </div>

              <h2 className="text-2xl font-extrabold text-[#17123f]">
                My Requests
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#6b5b95]">
                View your previous support requests and teacher replies.
              </p>
            </div>

            {requests.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-purple-200 bg-purple-50/60 p-6 text-center">
                <AlertCircle className="mx-auto mb-3 h-8 w-8 text-[#7c3aed]" />
                <p className="text-sm font-bold text-[#6b5b95]">
                  No requests sent yet.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {requests.map((request) => (
                  <div
                    key={request.id}
                    className="rounded-3xl bg-linear-to-br from-purple-50 to-pink-50 p-5"
                  >
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-pink-600">
                        {request.issue_type}
                      </span>

                      <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-bold text-[#6b5b95]">
                        {request.status === "resolved" ? (
                          <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                        ) : (
                          <Clock className="h-3 w-3 text-orange-500" />
                        )}
                        {request.status || "pending"}
                      </span>
                    </div>

                    <h3 className="font-extrabold text-[#17123f]">
                      {request.subject}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#6b5b95]">
                      {request.message}
                    </p>

                    {request.teacher_reply ? (
                      <div className="mt-4 rounded-2xl bg-white p-4">
                        <p className="mb-1 text-xs font-extrabold uppercase tracking-[0.18em] text-[#7c3aed]">
                          Teacher Reply
                        </p>
                        <p className="text-sm leading-6 text-[#4b3c72]">
                          {request.teacher_reply}
                        </p>
                      </div>
                    ) : (
                      <p className="mt-4 rounded-2xl bg-white/80 p-3 text-xs font-bold text-[#6b5b95]">
                        Waiting for teacher reply.
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}