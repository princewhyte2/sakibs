import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"

interface SponsorProps {
  icon: JSX.Element
  name: string
}

const sponsors: SponsorProps[] = [
  {
    icon: (
      <Avatar className="w-40 h-40 ">
        <AvatarImage alt="" src="/client1.png" />
        <AvatarFallback>SH</AvatarFallback>
      </Avatar>
    ),
    name: "NDBDA",
  },
  {
    icon: (
      <Avatar className="w-40 h-40 ">
        <AvatarImage alt="" src="/client5.png" />
        <AvatarFallback>SH</AvatarFallback>
      </Avatar>
    ),
    name: "R/S GOVT.",
  },
  {
    icon: (
      <Avatar className="w-40 h-40 ">
        <AvatarImage alt="" src="/client2.png" />
        <AvatarFallback>SH</AvatarFallback>
      </Avatar>
    ),
    name: "SPDC",
  },
  {
    icon: (
      <Avatar className="w-40 h-40 ">
        <AvatarImage alt="" src="/client3.png" />
        <AvatarFallback>SH</AvatarFallback>
      </Avatar>
    ),
    name: "FIRS",
  },
  {
    icon: (
      <Avatar className="w-40 h-40 ">
        <AvatarImage alt="" src="/client4.png" />
        <AvatarFallback>SH</AvatarFallback>
      </Avatar>
    ),
    name: "SUBEB",
  },
  {
    icon: (
      <Avatar className="w-40 h-40 ">
        <AvatarImage alt="" src="/client6.png" />
        <AvatarFallback>SH</AvatarFallback>
      </Avatar>
    ),
    name: "Sponsor 6",
  },
]

export const Sponsors = () => {
  return (
    <section id="sponsors" className="container pt-24 sm:py-32">
      <h2 className="mb-8 font-bold text-center text-md lg:text-xl text-primary">Customers and Clients</h2>

      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
        {sponsors.map(({ icon, name }: SponsorProps) => (
          <div key={name} className="flex items-center gap-1 text-muted-foreground/60">
            <span>{icon}</span>
            {/* <h3 className="text-xl font-bold">{name}</h3> */}
          </div>
        ))}
      </div>
    </section>
  )
}
