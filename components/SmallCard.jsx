// Libraries
import Image from 'next/image'

/**
 * Componente Card de tamaño chico estilizada
 * @param {string} img
 * @param {string} location
 *  @param {string} distance
 * @returns
 */
export default function SmallCard({ img, location, distance }) {
  return (
    <div className="m-2 mt-5 flex transform cursor-pointer items-center space-x-4 rounded-xl transition duration-200 hover:scale-x-105 hover:bg-gray-50">
      {/* Left */}
      <div className="relative h-16 w-16 ">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>

      {/* Right */}
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  )
}
