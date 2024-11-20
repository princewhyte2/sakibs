import oilInfra1 from "../assets/oil-infrastructure-1.jpg"
import eng1 from "../assets/eng1.jpg"
import { Card } from "@/components/ui/card"

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        {/* <CardContent> */}

        <img src={eng1} alt="user avatar" className="grayscale-[0%]  aspect-square object-cover" />
        {/* </CardContent> */}
      </Card>

      {/* Team */}
      {/* <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <img src="/hero.webp" alt="user avatar" className="grayscale-[0%]  aspect-square object-cover" />
      </Card> */}

      {/* Pricing */}
      {/* <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <img src="/hero.webp" alt="user avatar" className="grayscale-[0%]  aspect-square object-cover" />
      </Card> */}

      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <img src={oilInfra1} alt="oil infrastructure" className="grayscale-[0%]  aspect-square object-cover" />
      </Card>
    </div>
  )
}
