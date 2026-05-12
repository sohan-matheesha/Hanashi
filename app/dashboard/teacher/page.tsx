'use client'

import { useState } from 'react'

export default function TeacherPage() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)

    const data = {
      full_name: formData.get('full_name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      qualification: formData.get('qualification'),
      experience: formData.get('experience'),
      message: formData.get('message'),
    }

    try {
      const response = await fetch('/api/teacher-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        alert(result.error || 'Something went wrong')
        return
      }

      alert('Your teacher request has been submitted. Please wait for admin approval.')
      e.currentTarget.reset()
    } catch (error) {
      console.error(error)
      alert('Failed to submit teacher request')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#f8f5f1] px-6 py-10">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-lg">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#b45309]">
            Teacher Verification
          </p>

          <h1 className="mt-2 text-3xl font-bold text-[#202c5c]">
            Submit Teacher Approval Request
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-600">
            Please fill in your teaching details. After submitting, the admin will receive
            an email notification and review your request.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Full Name
            </label>
            <input
              name="full_name"
              type="text"
              required
              placeholder="Enter your full name"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#202c5c]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#202c5c]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Phone Number
            </label>
            <input
              name="phone"
              type="text"
              placeholder="Enter your phone number"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#202c5c]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Qualification
            </label>
            <input
              name="qualification"
              type="text"
              placeholder="Example: JLPT N3 / Japanese Diploma / Teaching Certificate"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#202c5c]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Teaching Experience
            </label>
            <textarea
              name="experience"
              rows={4}
              placeholder="Briefly describe your teaching experience"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#202c5c]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Message to Admin
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="Add any extra message for the admin"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#202c5c]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[#202c5c] px-5 py-3 font-semibold text-white transition hover:bg-[#162044] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? 'Submitting...' : 'Submit for Approval'}
          </button>
        </form>
      </div>
    </main>
  )
}