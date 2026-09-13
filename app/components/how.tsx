import { Bubble } from "./Elements/bubble";
import { howCardContent } from "@/app/utils/constants";

export const How = () => {

  return(
    <main className="w-full min-h-auto bg-brand-pale text-center p-10 mb-20">
      <Bubble className="text-brand-orange border-brand-orange">
        Three simple steps to your next role
      </Bubble>
      <h2 className="relative text-5xl mt-10">
        How gigspot works
      </h2>
      <section className="flex flex-col gap-y-20 md:flex-row items-center md:justify-between mt-20 px-10">
        {howCardContent.map((content) => 
          <div key={content.id} className="w-full md:w-1/4 flex flex-col items-center gap-y-2 text-brand-text">
            <div className={`w-18 h-18 flex items-center justify-center ${content.backgroundColor} rounded-3xl`}>
              {<content.icon />}
            </div>
            <h4 className="text-xl font-medium">
              {content.title}
            </h4>
            <p>
              {content.description}
            </p>
          </div>
        )}
      </section>
    </main>
  )
};