// Libraries
import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { DateRangePicker } from 'react-date-range'
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  SearchIcon,
} from '@heroicons/react/solid'

// CSS Files
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

export default function Header({ placeholder }) {
  // Estados
  const [searchInput, setSearchInput] = useState('')
  const [numGuests, setNumGuests] = useState(1)
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const router = useRouter()

  // Functions
  const handleSelectDate = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  const resetInput = () => {
    setSearchInput('')
  }

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numGuests,
      },
    })
  }

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white p-3 shadow-md md:p-4">
      {/* Left */}
      <div
        onClick={() => router.push('/')}
        className="relative my-auto flex h-10 cursor-pointer items-center"
      >
        <Image
          src="/images/logo_x.png"
          alt="logo"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle */}
      <div className="flex items-center rounded-full py-2 md:border-2 md:shadow-sm">
        <input
          className="flex-grow bg-transparent pl-5 text-gray-600 placeholder-gray-400 outline-none"
          type="text"
          placeholder={placeholder || "Start your search"}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <SearchIcon className="hidden h-8 cursor-pointer rounded-full bg-red-400 p-2 text-white md:mx-2 md:inline-flex" />
      </div>

      {/* Right */}
      <div className="flex items-center justify-end space-x-2 text-gray-500">
        <p className="hidden cursor-pointer md:inline">Become a earthian</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 rounded-full border-2 p-2">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {/* Date Selector */}
      {searchInput && (
        <div className="col-span-3 mx-auto mt-5 flex flex-col">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#518769']}
            onChange={handleSelectDate}
          />
          <div className="mb-4 flex items-center border-b pb-2">
            <h2 className="flex-grow text-2xl font-semibold">
              Number of Guest
            </h2>

            <UsersIcon className="h-5" />
            <input
              className="w-12 pl-2 text-lg text-green-400 outline-none"
              type="number"
              value={numGuests}
              min={1}
              onChange={(e) => setNumGuests(e.target.value)}
            />
          </div>
          <div className="flex">
            <button className="flex-grow text-gray-500" onClick={resetInput}>
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-green-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
