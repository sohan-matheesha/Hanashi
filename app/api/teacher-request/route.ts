import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { createClient } from '@/utils/supabase/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const {
      full_name,
      email,
      phone,
      qualification,
      experience,
      message,
    } = body

    if (!full_name || !email) {
      return NextResponse.json(
        { error: 'Full name and email are required' },
        { status: 400 }
      )
    }

    const supabase = await createClient()

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
      return NextResponse.json(
        { error: 'You must be logged in to submit a teacher request' },
        { status: 401 }
      )
    }

    const { error: insertError } = await supabase
      .from('teacher_requests')
      .insert({
        user_id: user.id,
        full_name,
        email,
        phone,
        qualification,
        experience,
        message,
        status: 'pending',
      })

    if (insertError) {
      console.error('Teacher request insert error:', insertError)

      return NextResponse.json(
        { error: insertError.message },
        { status: 500 }
      )
    }

    const adminEmail = process.env.ADMIN_EMAIL

    if (!adminEmail) {
      return NextResponse.json(
        { error: 'Admin email is not configured' },
        { status: 500 }
      )
    }

    await resend.emails.send({
      from: 'Hanashi <onboarding@resend.dev>',
      to: adminEmail,
      subject: 'New Teacher Approval Request - Hanashi',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Teacher Approval Request</h2>

          <p>A new teacher has submitted their details for approval.</p>

          <hr />

          <p><strong>Name:</strong> ${full_name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Qualification:</strong> ${qualification || 'Not provided'}</p>
          <p><strong>Experience:</strong> ${experience || 'Not provided'}</p>
          <p><strong>Message:</strong> ${message || 'No message'}</p>

          <hr />

          <p>Please login to the Hanashi admin panel and review this request.</p>
        </div>
      `,
    })

    return NextResponse.json({
      success: true,
      message: 'Teacher request submitted successfully',
    })
  } catch (error) {
    console.error('Teacher request API error:', error)

    return NextResponse.json(
      { error: 'Something went wrong while submitting the teacher request' },
      { status: 500 }
    )
  }
}