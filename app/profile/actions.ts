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
  
  let avatarUrl = undefined
  const photograph = formData.get('photograph') as File | null
  
  if (photograph && photograph.size > 0) {
    const fileExt = photograph.name.split('.').pop()
    const filePath = `${user.id}-${Math.random()}.${fileExt}`
    
    // Attempt to upload to a standard 'avatars' bucket. 
    // Make sure this bucket is created in your Supabase project!
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('avatars')
      .upload(filePath, photograph, { upsert: true })

    if (uploadData && !uploadError) {
      const { data: publicUrlData } = supabase.storage
        .from('avatars')
        .getPublicUrl(filePath)
        
      avatarUrl = publicUrlData.publicUrl
    } else {
      console.error('Avatar upload error:', uploadError)
    }
  }

  // Get current profile first if we need to preserve existing avatar
  const { data: existingProfile } = await supabase
    .from('profiles')
    .select('avatar_url')
    .eq('id', user.id)
    .single()

  const { error } = await supabase.from('profiles').upsert({
    id: user.id,
    full_name: fullName,
    avatar_url: avatarUrl || existingProfile?.avatar_url,
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

  redirect('/dashboard')
}
