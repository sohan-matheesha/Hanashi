'use client'

import { Search } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function DashboardSearch() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const currentSearch = searchParams.get('search') || ''

  function handleSearch(value: string) {
    const params = new URLSearchParams(searchParams.toString())

    if (value.trim()) {
      params.set('search', value)
    } else {
      params.delete('search')
    }

    const queryString = params.toString()
    router.push(queryString ? `${pathname}?${queryString}` : pathname)
  }

  return (
    <div className="relative w-full max-w-[240px] hidden sm:block">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
        <Search className="w-[14px] h-[14px]" />
      </div>

      <input
        type="text"
        defaultValue={currentSearch}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search characters..."
        className="w-full pl-9 pr-4 py-2 bg-[#f0f0f4] border-none rounded-full text-xs font-medium text-[#202c5c] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#202c5c]/20"
      />
    </div>
  )
}