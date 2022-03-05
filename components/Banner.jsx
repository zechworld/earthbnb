import Image from 'next/image'

export default function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
        alt="Hero image"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-large">Not sure where to go?</p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">Earthian</button>
      </div>
    </div>
  )
}
