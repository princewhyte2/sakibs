import { useState } from "react"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { buttonVariants } from "./ui/button"
import { Menu } from "lucide-react"
import { ModeToggle } from "./mode-toggle"
import { LogoIcon } from "./Icons"

interface RouteProps {
  href: string
  label: string
}

const routeList: RouteProps[] = [
  {
    href: "#features",
    label: "Projects",
  },
  {
    href: "#testimonials",
    label: "Testimonials",
  },
  {
    href: "#services",
    label: "Services",
  },
  {
    href: "#about",
    label: "About us",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
]

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container flex justify-between w-screen px-4 h-14 ">
          <NavigationMenuItem className="flex font-bold">
            <a rel="noreferrer noopener" href="/" className="flex ml-2 text-xl font-bold">
              <LogoIcon />
              Sakibs
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <ModeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu className="flex w-5 h-5 md:hidden" onClick={() => setIsOpen(true)}>
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="text-xl font-bold">Sakibs</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col items-center justify-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </a>
                  ))}
                  <a
                    rel="noreferrer noopener"
                    download
                    href="/cp.pdf"
                    target="_blank"
                    className={`w-[110px] border ${buttonVariants({
                      variant: "secondary",
                    })}`}
                  >
                    Company Profile
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden gap-2 md:flex">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div className="hidden gap-2 md:flex">
            <a
              rel="noreferrer noopener"
              download
              href="/cp.pdf"
              target="_blank"
              className={`border ${buttonVariants({ variant: "secondary" })}`}
            >
              {/* <GitHubLogoIcon className="w-5 h-5 mr-2" /> */}
              Company Profile
            </a>

            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}
