import { MessageCircle } from "lucide-react"
import { HeroCards } from "./HeroCards"
import { Button } from "./ui/button"

const phoneNumber = "+2349070450348"

export const Hero = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello Sakibs Nigeria Limited! 👋\n\nI'm interested in learning more about your infrastructure solutions. I found you through your website and would love to discuss how you can help with my project.\n\nLooking forward to hearing from you!",
    )

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappURL, "_blank")
  }
  return (
    <section className="container grid gap-10 py-10 lg:grid-cols-2 place-items-center md:py-22">
      <div className="space-y-6 text-center lg:text-start">
        <main className="text-5xl font-bold md:text-6xl">
          <h1 className="inline">
            Pioneering{" "}
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Innovative{" "}
            </span>{" "}
            Infrastructure
          </h1>{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Solutions
            </span>
          </h2>
        </main>

        <p className="mx-auto text-xl text-muted-foreground md:w-10/12 lg:mx-0">
          Delivering excellence in supply, installation, and maintenance services across industrial, commercial, and
          residential sectors.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button onClick={handleWhatsAppClick} className="w-full md:w-1/3">
            <MessageCircle className="w-5 h-5 mr-2" />
            Request Consultation
          </Button>

          {/* <a
            rel="noreferrer noopener"
            href="https://github.com/leoMirandaa/shadcn-landing-page.git"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Github Repository
            <GitHubLogoIcon className="w-5 h-5 ml-2" />
          </a> */}
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  )
}
