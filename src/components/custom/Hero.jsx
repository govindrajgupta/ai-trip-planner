import { Link } from "react-router-dom"
import { Button } from "../ui/button"


const Hero = () => {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
      <div className='font-extrabold text-[60px] text-center'>
        <span className='text-[#f66551]'>
          Discover Breathtaking Destinations, Curated Just for You!</span>📍 Personalized Itineraries | 🏝️ Hidden Gems | 🗺️ Seamless Adventures
          <p className="text-xl text-gray-500 text-center">🌍 ExploreAI: Your Ultimate AI-Powered Travel Guide 🚀
</p>

<Link to={'/create-trip'}>
            <Button>Get Started, It&apos;s Free</Button>
</Link>
          
</div>
    </div>
  )
}

export default Hero