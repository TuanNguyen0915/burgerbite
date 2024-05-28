import React from "react"
import { GiChefToque } from "react-icons/gi"

const ReservationForm = () => {
  return (
    <div className="flexCenter w-full flex-col gap-6 rounded-xl bg-green-700 p-6">
      <GiChefToque className="text-white" size={50} />
      <h1 className="text-5xl font-bold uppercase text-white">Reservation</h1>
      <h1 className="text-3xl font-bold uppercase text-white">
        book your table
      </h1>
      <div className="mt-8 w-[80%]">
        <div className="flexBetween mx-auto w-full gap-10 max-md:flex-col max-md:gap-4">
          <select
            name="people"
            id="people"
            className=" w-full rounded-lg border border-gray-100 bg-transparent px-10 py-2.5 text-[16px] font-bold text-white outline-none"
          >
            <option value="1" className="text-black">
              1 Person
            </option>
            <option value="2" className="text-black">
              2 People
            </option>
            <option value="3" className="text-black">
              3 People
            </option>
            <option value="4" className="text-black">
              4 People
            </option>
            <option value="4+" className="text-black">
              4+ People
            </option>
          </select>
          <input
            type="date"
            className="w-full rounded-lg border border-gray-100 bg-transparent px-10 py-2.5 text-[16px] font-bold
          text-white outline-none"
          />
        </div>
      </div>
      <input
        type="time"
        className="mx-auto w-[80%] rounded-lg border border-gray-100 bg-transparent px-10 py-2.5 text-[16px] font-bold text-white outline-none"
      />
      <button className="flexCenter hover:border-whi te group w-[80%] overflow-hidden rounded-lg border border-orange-500 bg-orange-500 px-6 py-3 text-lg text-black transition-all duration-300 hover:bg-transparent ">
        <p className="text-white transition-all duration-200 group-hover:scale-125">
          Book Now
        </p>
      </button>
    </div>
  )
}

export default ReservationForm
