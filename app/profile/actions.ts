'use server'

import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export async function updateProfile(formData: FormData) {
  const supabase = await createClient()

  // Verify auth
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    redirect('/login')
  }

  // NOTE: Here you would normally update the 'profiles' table in your Supabase database.
  // For demonstration, we'll extract the data and pretend to save it.
  
  const fullName = formData.get('fullName') as string
  const dateOfBirth = formData.get('dateOfBirth') as string
  const residence = formData.get('residence') as string
  const education = formData.get('education') as string
  const hasJob = formData.get('hasJob') as string // 'yes' or 'no'
  
  const { error } = await supabase.from('profiles').upsert({
    id: user.id,
    full_name: fullName,
    date_of_birth: dateOfBirth, // Dates like YYYY-MM-DD map nicely to postgres dates
    residence: residence,
    education: education,
    has_job: hasJob === 'yes',
    updated_at: new Date().toISOString()
  })

  if (error) {
    console.error('Error updating profile:', error)
    redirect('/profile?message=Failed to update profile')
  }

  redirect('/profile?message=Profile updated successfully')
}
