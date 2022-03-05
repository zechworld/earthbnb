import Image from "next/image"

const MediumCard = ({img, title}) => {
  return (
    <div>
      <div className="relative w-48 h-48">
        <Image src={img} layout="fill"/>
      </div>
      <h1>{title}</h1>
    </div>
  )
}

export default MediumCard