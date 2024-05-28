import Image from "next/image"
import { BiShoppingBag } from "react-icons/bi"

interface IProps {
  burger: {
    image: string
    title: string
    stars: string
    rating: string
    desc: string
    price: string
  }
}

const PopularCard = ({ burger }: IProps) => {
  return (
    <>
      <div className="flexCenter relative mx-auto h-[400px] w-[60%] lg:w-[80%] ">
        <Image
          src={burger.image}
          alt={burger.title}
          fill
          className="relative rounded-3xl object-contain"
        />
      </div>
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold capitalize tracking-wide lg:text-3xl">
          {burger.title}
        </h1>
        <div className="flex items-center gap-4">
          <p>{burger.stars}</p>
          <p className="text-lg italic">{burger.rating}</p>
        </div>
        <p>{burger.desc}</p>
        <div className="flexBetween w-full">
          <p className="text-3xl font-bold text-red-700">{burger.price}</p>
          <button className="flexCenter rounded-lg bg-orange-600 px-4 py-2 text-white transition-all duration-300 hover:bg-green-700 sm:px-6 sm:py-3">
            <BiShoppingBag className="h-[1.2rem] w-[1.2rem] sm:h-[1.7rem] sm:w-[1.7rem]" />
          </button>
        </div>
      </div>
    </>
  )
}

export default PopularCard
