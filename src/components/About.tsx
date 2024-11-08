import { Statistics } from "./Statistics"
import pilot from "../assets/pilot.png"

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="py-12 border rounded-lg bg-muted/50">
        <div className="flex flex-col-reverse gap-8 px-6 md:flex-row md:gap-12">
          <img src={pilot} alt="" className="w-[300px] object-contain rounded-lg" />
          <div className="flex flex-col justify-between bg-green-0">
            <div className="pb-6">
              <h2 className="text-3xl font-bold md:text-4xl">
                <span className="text-transparent bg-gradient-to-b from-primary/60 to-primary bg-clip-text">
                  About{" "}
                </span>
                Us
              </h2>
              <p className="mt-4 text-xl text-muted-foreground">
                Sakibs Nigeria Limited is a pioneering leader in innovative infrastructural solutions and maintenance
                services, offering a comprehensive range of expertise in supply, installation, and maintenance for
                industrial, commercial, and residential facilities worldwide. With a commitment to excellence,
                sustainability, and technological advancement, Sakibs Nigeria Limited has positioned itself as a trusted
                partner in optimizing operations and enhancing the value of diverse infrastructures. Our team of highly
                skilled professionals, equipped with the latest tools and technologies, ensures that we deliver
                top-notch services tailored to meet the unique needs of each client.
              </p>
            </div>

            {/* <Statistics /> */}
          </div>
        </div>
      </div>
    </section>
  )
}
