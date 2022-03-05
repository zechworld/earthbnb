import Image from 'next/image'
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  SearchIcon,
} from '@heroicons/react/solid'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white p-3 shadow-md md:p-4">
      {/* Left */}
      <div className="relative my-auto flex h-10 cursor-pointer items-center">
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
          placeholder="Start your search"
        />
        <SearchIcon className="hidden h-8 cursor-pointer rounded-full bg-red-400 p-2 text-white md:mx-2 md:inline-flex" />
      </div>

      {/* Right */}
      <div className="flex items-center space-x-2 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a earthian</p>
        <GlobeAltIcon className="h-6 cursor-pointer"/>
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6"/>
        </div>
      </div>
    </header>
  )
}
