import { MessageCircle } from "lucide-react"
import { Button } from "./ui/button"
const phoneNumber = "+2349070450348"
export const Cta = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello Sakibs Nigeria Limited! 👋\n\nI'm interested in learning more about your infrastructure solutions. I found you through your website and would love to discuss how you can help with my project.\n\nLooking forward to hearing from you!",
    )

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappURL, "_blank")
  }
  return (
    <section id="cta" className="py-16 my-24 bg-muted/50 sm:my-32">
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl font-bold md:text-4xl ">
            Ready to
            <span className="text-transparent bg-gradient-to-b from-primary/60 to-primary bg-clip-text"> elevate </span>
            your infrastructure?
          </h2>
          <p className="mt-4 mb-8 text-xl text-muted-foreground lg:mb-0">Transform Your Infrastructure Today</p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button onClick={handleWhatsAppClick} className="w-full md:mr-4 md:w-auto">
            <MessageCircle className="w-5 h-5 mr-2" />
            Contact our experts today
          </Button>
        </div>
      </div>
    </section>
  )
}
