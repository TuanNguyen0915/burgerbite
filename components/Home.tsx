import Chefs from "./Chefs/Chefs"
import Delivery from "./Delivery/Delivery"
import Feature from "./Feature/Feature"
import Footer from "./Footer/Footer"
import Hero from "./Hero/Hero"
import Offer from "./Offer/Offer"
import PopularBurgers from "./PopularBurgers/PopularBurgers"
import Reservation from "./Reservation/Reservation"

const Home = () => {
  return (
    <div className="flexCol w-full gap-24 max-md:gap-10">
      <Hero />
      <Feature />
      <PopularBurgers />
      <Delivery />
      <Chefs />
      <Reservation />
      <Offer />
      <Footer />
    </div>
  )
}

export default Home
