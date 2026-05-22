"use client";

import { useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { updateUserRole, type UpdateUserRoleState } from "../actions";

type UpdateUserRoleFormProps = {
  userId: string;
  currentRole: string;
  teacherVerificationStatus?: string | null;
};

const initialState: UpdateUserRoleState = {
  success: null,
  error: null,
};

export default function UpdateUserRoleForm({
  userId,
  currentRole,
  teacherVerificationStatus,
}: UpdateUserRoleFormProps) {
  const [state, formAction, isPending] = useActionState(
    updateUserRole,
    initialState
  );

  const router = useRouter();

  // When the server action returns success, refresh server components so
  // the admin users table and sidebar will show the updated role/status.
  useEffect(() => {
    if (state?.success) {
      // Refresh server-rendered data (revalidations are also triggered server-side)
      try {
        router.refresh();
      } catch (e) {
        // ignore: router.refresh can throw in some test envs
        console.warn("router.refresh() failed:", e);
      }
    }
  }, [state?.success, router]);

  const normalizedCurrentRole = String(currentRole || "student")
    .toLowerCase()
    .trim();
  const normalizedTeacherStatus = String(
    teacherVerificationStatus || "pending"
  )
    .toLowerCase()
    .trim();

  const [selectedRole, setSelectedRole] = useState(normalizedCurrentRole);

  const isApprovedTeacher =
    normalizedCurrentRole === "teacher" && normalizedTeacherStatus === "approved";

  const hasChanged = selectedRole !== normalizedCurrentRole;

  const hasSuccess = Boolean(state?.success);

  const shouldShowUpdatedButton =
    !hasChanged && (hasSuccess || isApprovedTeacher);

  const shouldShowUpdateButton = !shouldShowUpdatedButton;

  return (
    <div>
      <form action={formAction} className="flex items-center gap-2">
        <input type="hidden" name="userId" value={userId} />

        <select
          name="role"
          value={selectedRole}
          onChange={(event) => {
            setSelectedRole(event.target.value);
          }}
          disabled={isPending}
          className="rounded-2xl bg-gray-50 px-4 py-2 text-sm font-semibold text-[#202c5c] outline-none focus:ring-2 focus:ring-[#a54a5c]/20 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <option value="student">student</option>
          <option value="teacher">teacher</option>
          <option value="admin">admin</option>
        </select>

        <button
          type="submit"
          disabled={isPending || (!hasChanged && shouldShowUpdatedButton)}
          className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-bold transition disabled:cursor-not-allowed ${
            isPending
              ? "bg-gray-300 text-gray-600"
              : shouldShowUpdateButton
                ? "bg-[#a54a5c] text-white hover:bg-[#913f50]"
                : "bg-green-600 text-white"
          }`}
        >
          {isPending ? (
            "Updating..."
          ) : shouldShowUpdateButton ? (
            "Update"
          ) : (
            <>
              <CheckCircle2 size={15} />
              Updated
            </>
          )}
        </button>
      </form>

      {state?.success && (
        <p
          role="status"
          aria-live="polite"
          className="mt-2 text-xs font-semibold text-green-700"
        >
          {state.success}
        </p>
      )}

      {state?.error && (
        <p role="alert" className="mt-2 text-xs font-semibold text-red-600">
          {state.error}
        </p>
      )}
    </div>
  );
}