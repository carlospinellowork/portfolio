import Marquee from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";

const languagesSpecialist = [
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Vue.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  {
    name: "Angular.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "TailwindCSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
];

const firstRow = languagesSpecialist.slice(0, languagesSpecialist.length / 2);

const ReviewCard = ({ icon, name }: { icon: string; name: string }) => {
  return (
    <figure
      className={cn(
        "relative w-44 sm:w-48 cursor-pointer overflow-hidden rounded-lg p-3 transition-colors duration-200",
        // light styles
        "bg-zinc-100 hover:bg-zinc-200/40",
        // dark styles
        "dark:bg-zinc-800/80 dark:hover:bg-zinc-700/60 dark:text-zinc-50"
      )}
    >
      <div className="flex items-center justify-center gap-2">
        <img
          className="rounded-md shadow-sm"
          width="28"
          height="28"
          alt={name}
          src={icon}
        />
        <figcaption className="text-xs font-medium tracking-wide sm:text-sm">
          {name}
        </figcaption>
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[120px] w-full items-center justify-center overflow-hidden bg-transparent">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="absolute inset-y-0 left-0 w-16 pointer-events-none bg-gradient-to-r from-zinc-900 to-transparent dark:from-zinc-900"></div>
      <div className="absolute inset-y-0 right-0 w-16 pointer-events-none bg-gradient-to-l from-zinc-900 to-transparent dark:from-zinc-900"></div>
    </div>
  );
}
