import React from "react"

const Offer = () => {
  return (
    <div className="flexBetween mx-auto w-[60%] flex-col  gap-4 py-2 text-center max-md:w-[80%]">
      <h1 className="heading mb-8 mt-4 text-center">
        join for hot <span className="text-orange-500">Offers</span>
      </h1>
      <p className=" text-gray-600 md:text-lg lg:text-xl">
        At{" "}
        <span className="text-2xl font-semibold text-orange-500">
          BurgerBite
        </span>
        , we believe in delivering exceptional value to our loyal customers. By
        subscribing to our newsletter, you gain access to a treasure trove of
        exclusive offers, discounts, and exciting promotions.
      </p>

      <p className="text-gray-600 md:text-lg lg:text-xl">
        Remember to check the specific terms and conditions for each offer, and
        enjoy your burger season! 🍔
      </p>
      <div className="flexBetween mx-auto w-[80%] gap-4">
        <input
          type="email"
          placeholder="Your email"
          autoComplete="off"
          className="flex-1 rounded-lg bg-slate-300 px-4 py-2 text-lg text-black outline-none placeholder:text-slate-600 lg:text-xl"
        />
        <button className="flexCenter tex-lg rounded-lg bg-green-700 px-6 py-2 text-white transition-all duration-300 hover:bg-green-500 lg:text-xl">
          Subscribe
        </button>
      </div>
    </div>
  )
}

export default Offer
