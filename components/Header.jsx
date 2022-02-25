import Image from 'next/image'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-col-3 bg-white shadow-md p-3 md:p-4">
      {/* Left */}
      <div className='relative flex items-center h-10 cursor-pointer my-auto'>
        <Image
          src="/images/logo_x.png"
          alt="logo"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Middle */}
      <div>
        <input type="text" />
      </div>
      {/* Right */}
    </header>
  )
}
