import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons"
import cubeLeg from "../assets/cube-leg.png"

interface ServiceProps {
  title: string
  description: string
  icon: JSX.Element
}

const serviceList: ServiceProps[] = [
  {
    title: "Electrical & Power Solutions",
    description: `Advanced power systems design, installation, and optimization for maximum efficiency and reliability.`,
    icon: <ChartIcon />,
  },
  {
    title: "Integrated Facility Management",
    description: `Comprehensive facility management services utilizing IoT and predictive maintenance for optimal operations.`,
    icon: <WalletIcon />,
  },
  {
    title: "Green Building Solutions",
    description: `Sustainable design advisory and implementation services for environmentally conscious infrastructure.`,
    icon: <MagnifierIcon />,
  },
  {
    title: `HVAC Optimization`,
    description: `State-of-the-art heating, ventilation, and air conditioning solutions with smart BMS integration.`,
    icon: <MagnifierIcon />,
  },
  {
    title: `Oil & Gas Asset Optimization`,
    description: `Specialized services for maximizing equipment efficiency and operational continuity in the energy sector.`,
    icon: <MagnifierIcon />,
  },
  // {
  //   title: `Well Reservoir and FM (WRFM)`,
  //   description: `Sakibs excels in managing well reservoirs and associated facilities, providing comprehensive solutions that cover exploration, production, and facility management. By combining specialized technical knowledge with cutting-edge practices, we ensure optimal well performance and seamless facility operations.`,
  //   icon: <MagnifierIcon />,
  // },
  {
    title: `Fire Safety Systems`,
    description: `Complete fire protection solutions from design to maintenance, ensuring maximum safety compliance.`,
    icon: <MagnifierIcon />,
  },
]

export const Services = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">
            <span className="text-transparent bg-gradient-to-b from-primary/60 to-primary bg-clip-text">
              Client-Centric{" "}
            </span>
            Services
          </h2>

          <p className="mt-4 mb-8 text-xl text-muted-foreground ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis dolor.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="flex items-start justify-start gap-4 space-y-1 md:flex-row">
                  <div className="p-1 mt-1 bg-primary/20 rounded-2xl">{icon}</div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="mt-2 text-md">{description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img src={cubeLeg} className="w-[300px] md:w-[500px] lg:w-[600px] object-contain" alt="About services" />
      </div>
    </section>
  )
}
