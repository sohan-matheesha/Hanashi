import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Castle, ArrowLeft, Camera, User, BadgeInfo, MapPin, Briefcase } from 'lucide-react'
import { updateProfile } from './actions'
import { AvatarUpload } from './AvatarUpload'

export default async function ProfilePage(props: { searchParams: Promise<{ message?: string }> }) {
  const searchParams = await props.searchParams;
  const message = searchParams?.message;

  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // Fetch existing profile to populate form if it exists
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  return (
    <div className="min-h-screen bg-gray-50/50 font-sans pb-12">
      {/* Header */}
      <nav className="w-full h-16 px-8 flex items-center justify-between bg-white border-b border-gray-100 sticky top-0 z-50">
        <Link href="/dashboard" className="flex items-center gap-2 text-gray-500 hover:text-hanashi-primary transition-colors font-medium text-sm">
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>
        <Link href="/" className="font-bold text-lg text-hanashi-dark flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Castle className="w-5 h-5 text-hanashi-primary" />
          Hanashi
        </Link>
      </nav>

      <main className="max-w-3xl mx-auto pt-10 px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-black text-hanashi-dark mb-2">My Profile</h1>
          <p className="text-gray-500 font-medium">Manage your personal information and preferences.</p>
        </div>

        {message && (
          <div className={`mb-6 p-4 rounded-xl font-medium border text-center ${message.includes('successfully') ? 'bg-green-50 text-green-700 border-green-100' : 'bg-red-50 text-red-600 border-red-100'}`}>
            {message}
          </div>
        )}

        <form action={updateProfile} className="bg-white rounded-4xl p-8 md:p-10 shadow-sm border border-gray-100 space-y-10">
          
          {/* Photograph Upload Section */}
          <section className="flex flex-col items-center justify-center pt-2 pb-6 border-b border-gray-50">
            <AvatarUpload currentPhotoUrl={profile?.avatar_url || ''} />
            <p className="text-sm font-semibold text-gray-700 mt-4">Upload Photograph</p>
            <p className="text-xs text-gray-400 mt-1">PNG or JPG up to 5MB</p>
          </section>          {/* Personal Information */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <BadgeInfo className="w-5 h-5 text-hanashi-primary" />
              <h2 className="text-xl font-bold text-hanashi-dark">Personal Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="fullName">Full Name</label>
                <input
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-hanashi-primary/50 focus:border-hanashi-primary transition-all bg-gray-50/50 text-hanashi-dark placeholder:text-gray-400"
                  type="text"
                  name="fullName"
                  id="fullName"
                  defaultValue={profile?.full_name || ''}
                  placeholder="e.g., John Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="dateOfBirth">Date of Birth</label>
                <input
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-hanashi-primary/50 focus:border-hanashi-primary transition-all bg-gray-50/50 text-hanashi-dark"
                  type="date"
                  name="dateOfBirth"
                  id="dateOfBirth"
                  defaultValue={profile?.date_of_birth || ''}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="residence">Residence Details</label>
              <div className="relative">
                <div className="absolute top-3.5 left-4 text-gray-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <input
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-hanashi-primary/50 focus:border-hanashi-primary transition-all bg-gray-50/50 text-hanashi-dark placeholder:text-gray-400"
                  type="text"
                  name="residence"
                  id="residence"
                  defaultValue={profile?.residence || ''}
                  placeholder="City, Country (e.g., Tokyo, Japan)"
                  required
                />
              </div>
            </div>
          </section>

          {/* Education & Employment */}
          <section className="space-y-6 pt-6 border-t border-gray-50">
             <div className="flex items-center gap-2 mb-2">
              <Briefcase className="w-5 h-5 text-hanashi-primary" />
              <h2 className="text-xl font-bold text-hanashi-dark">Education & Employment</h2>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="education">Highest Education Qualification</label>
              <input
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-hanashi-primary/50 focus:border-hanashi-primary transition-all bg-gray-50/50 text-hanashi-dark placeholder:text-gray-400"
                type="text"
                name="education"
                id="education"
                defaultValue={profile?.education || ''}
                placeholder="e.g., Bachelor of Arts in Japanese Studies"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Do you currently have a job?</label>
              <div className="flex gap-4">
                <label className="flex-1 cursor-pointer">
                  <input type="radio" name="hasJob" value="yes" defaultChecked={profile?.has_job === true} className="peer sr-only" required />
                  <div className="w-full p-4 rounded-xl border border-gray-200 peer-checked:border-hanashi-primary peer-checked:bg-hanashi-accent/20 peer-checked:text-hanashi-primary transition-all text-center font-bold text-gray-500 hover:bg-gray-50">
                    Yes, I am employed
                  </div>
                </label>
                <label className="flex-1 cursor-pointer">
                  <input type="radio" name="hasJob" value="no" defaultChecked={profile?.has_job === false} className="peer sr-only" required />
                  <div className="w-full p-4 rounded-xl border border-gray-200 peer-checked:border-hanashi-primary peer-checked:bg-hanashi-accent/20 peer-checked:text-hanashi-primary transition-all text-center font-bold text-gray-500 hover:bg-gray-50">
                    No, I am not
                  </div>
                </label>
              </div>
            </div>
          </section>

          {/* Submit Action */}
          <div className="pt-6 mt-6 border-t border-gray-50 flex justify-end">
            <button
              type="submit"
              className="bg-hanashi-primary text-white font-bold py-4 px-8 rounded-xl hover:bg-opacity-90 transition-all shadow-lg shadow-hanashi-primary/30 hover:-translate-y-0.5"
            >
              Save Profile
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}
