'use client'

import { useState } from 'react'
import { User, Camera } from 'lucide-react'

export function AvatarUpload({ currentPhotoUrl }: { currentPhotoUrl?: string }) {
  const [preview, setPreview] = useState<string | null>(currentPhotoUrl || null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setPreview(url)
    }
  }

  return (
    <div className="relative group cursor-pointer inline-block">
      <div className="w-32 h-32 bg-hanashi-accent/40 rounded-full flex items-center justify-center border-4 border-white shadow-md overflow-hidden relative">
        {preview ? (
          <img src={preview} alt="Profile" className="w-full h-full object-cover" />
        ) : (
          <User className="w-12 h-12 text-hanashi-primary/60" />
        )}
        <div className="absolute inset-0 bg-hanashi-dark/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Camera className="w-8 h-8 text-white" />
        </div>
      </div>
      <div className="absolute bottom-0 right-0 bg-white p-2 text-hanashi-primary rounded-full shadow-sm border border-gray-100 z-10 pointer-events-none">
        <Camera className="w-4 h-4" />
      </div>
      <input 
        type="file" 
        name="photograph" 
        accept="image/*" 
        onChange={handleFileChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" 
      />
    </div>
  )
}
