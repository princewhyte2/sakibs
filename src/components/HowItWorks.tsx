import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons"

interface FeatureProps {
  icon: JSX.Element
  title: string
  description: string
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Our Vision",
    description:
      "To be a global leader in infrastructural solutions and maintenance services, recognized for exceptional quality, innovation, and excellence.",
  },
  {
    icon: <MapIcon />,
    title: "Our Mission",
    description:
      "Pioneering sustainable infrastructural solutions that enhance functionality, efficiency, and resilience while promoting environmental responsibility and technological advancement.",
  },
  {
    icon: <PlaneIcon />,
    title: "Integrity",
    description: "Unwavering commitment to ethical business practices",
  },
  {
    icon: <GiftIcon />,
    title: "Excellence",
    description: "Continuous pursuit of exceptional quality",
  },
  {
    icon: <GiftIcon />,
    title: "Collaboration",
    description: "Strong partnerships for shared success",
  },
  {
    icon: <GiftIcon />,
    title: "Safety",
    description: "Prioritizing health and environmental responsibility",
  },
  {
    icon: <GiftIcon />,
    title: "Customer focus",
    description: "Dedicated to exceeding client expectations",
  },
]

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container py-24 text-center sm:py-32">
      <h2 className="text-3xl font-bold md:text-4xl ">
        Why <span className="text-transparent bg-gradient-to-b from-primary/60 to-primary bg-clip-text">Choose</span> Us
      </h2>
      <p className="mx-auto mt-4 mb-8 text-xl md:w-3/4 text-muted-foreground"></p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
