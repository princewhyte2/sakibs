import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { ArrowUpToLine, MessageCircle } from "lucide-react"
const phoneNumber = "+2349070450348"
export const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    })
  }, [])

  const goToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
    })
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello Sakibs Nigeria Limited! 👋\n\nI'm interested in learning more about your infrastructure solutions. I found you through your website and would love to discuss how you can help with my project.\n\nLooking forward to hearing from you!",
    )

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappURL, "_blank")
  }

  return (
    <div className="fixed bottom-4 right-4 opacity-90 flex gap-6 shadow-md">
      <Button className=" bg-red-500" onClick={handleWhatsAppClick}>
        <MessageCircle className="w-5 h-5 mr-2" />
        Contact our experts today
      </Button>
      {showTopBtn && (
        <>
          <Button onClick={goToTop} size="icon">
            <ArrowUpToLine className="h-4 w-4" />
          </Button>
        </>
      )}
    </div>
  )
}
