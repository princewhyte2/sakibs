import { Button } from "./ui/button"

export const Cta = () => {
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
          <Button className="w-full md:mr-4 md:w-auto">Contact our experts today</Button>
        </div>
      </div>
    </section>
  )
}
