import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import water from "../assets/water.jpg"
import power from "../assets/power.jpg"
import edu from "../assets/edu.jpg"
import industry from "../assets/industry.jpg"
import commercial from "../assets/commercial.jpg"

interface FeatureProps {
  title: string
  description: string
  image: string
}

// Water Infrastructure Development (SPDC)
// Power Generation Installation (Rivers State Government)
// Educational Facility Construction (SUBEB)
// Industrial Facility Management
// Commercial Infrastructure Development

const features: FeatureProps[] = [
  {
    title: "Water Infrastructure Development (SPDC)",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: water,
  },
  {
    title: "Power Generation Installation (Rivers State Government)",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: power,
  },
  {
    title: "Educational Facility Construction (SUBEB)",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: edu,
  },
  {
    title: "Industrial Facility Management",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: industry,
  },
  {
    title: "Commercial Infrastructure Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: commercial,
  },
]

// const featureList: string[] = [
//   "Dark/Light theme",
//   "Reviews",
//   "Features",
//   "Pricing",
//   "Contact form",
//   "Our team",
//   "Responsive design",
//   "Newsletter",
//   "Minimalist",
// ]

export const Features = () => {
  return (
    <section id="features" className="container py-24 space-y-8 sm:py-32">
      <h2 className="text-3xl font-bold lg:text-4xl md:text-center">
        Featured{" "}
        <span className="text-transparent bg-gradient-to-b from-primary/60 to-primary bg-clip-text">Projects</span>
      </h2>

      {/* <div className="flex flex-wrap gap-4 md:justify-center">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div> */}

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img src={image} alt="About feature" className="w-[200px] lg:w-[300px] h-[200px] object-fill mx-auto" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
